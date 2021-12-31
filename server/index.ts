import express, {Request, Response, NextFunction} from 'express'
import next from 'next'
import http from 'http'
import https from 'https'
import cookieParser from 'cookie-parser'
import requestip from 'request-ip'
import fileUpload from 'express-fileupload'
import chalk from 'chalk'
import 'express-async-errors'
import './env'
import {loadCertificates} from './loading'
import {conn} from './database'
import {loadSMTP} from './loading'

export const isDev = process.env.NODE_ENV !== 'production'
export const mailer = loadSMTP()
export const nextServer = next({dev: isDev})
export const handle = nextServer.getRequestHandler()

import Sessions from './routes/Sessions'
import Configs from './routes/Configs'
import Codes from './routes/Codes'
import Register from './routes/Register'
import User from './routes/User'
import Admin from './routes/Admin'

import {getInitialProps} from './models/Props'

console.info(`${chalk.green('[Info]')} Starting SiGAÊ server`)

conn.then(async () => {
  console.info(`${chalk.green('[Info]')} Database connected successfully!`)

  nextServer.prepare().then(() => {
    const app = express()
    const server = (() => {
      if (process.env.SERVER_SSL_ENABLE) {
        const cert = loadCertificates()
        if (cert === null) {
          console.info(`${chalk.red('[Error]')} SSL certificate not found!`)
          process.exit(1)
        }
        console.info(`${chalk.green('[Info]')} SSL certificate loaded`)
        return https.createServer(cert, app)
      } else {
        console.info(`${chalk.yellowBright('[Warning]')} Server running without a SSL certificate`)
        return http.createServer(app)
      }
    })()

    app.use(cookieParser())
    app.use(express.json({
      limit: process.env.PAYLOAD_JSON_SIZE
    }))

    app.use(fileUpload({
      limits: {
        fileSize: process.env.PAYLOAD_FILE_SIZE
      },
      abortOnLimit: true
    }))

    app.use(requestip.mw())
    app.disable('x-powered-by')

    app.use('/api', Sessions)
    app.use('/api', Configs)
    app.use('/api', Codes)
    app.use('/api', Register)
    app.use('/api', User)
    app.use('/api', Admin)

    app.all('/api/*', (req, res) => {
      res.status(404).send({error: 'NOT_FOUND'})
    })

    app.all('/api', (req, res) => {
      res.send({info: 'SiGAÊ API'})
    })

    app.use((err: any, req: Request, res: Response, next: NextFunction) => {
      const message = err.message
      const type = err.type
      if (err) {
        if (type === 'entity.parse.failed') {
          return res.status(422).send({error: 'INVALID_JSON_FORMAT'})
        }
        if (process.env.npm_lifecycle_event === 'dev') {
          throw err
        }
        res.status(500).send({
          server: process.env.npm_lifecycle_event === 'dev' ? message : 'INTERNAL_SERVER_ERROR'
        })
      } else {
        next()
      }
    })

    app.get('/', async (req, res) => {
      const props = await getInitialProps(req.cookies.session)
      if (props?.configs?.theme) {
        res.cookie('theme', props?.configs?.theme, {
          maxAge: 365 * 24 * 60 * 60 * 1000
        })
      }
      nextServer.render(req, res, req.path, props as any)
    })

    app.get('/modulo/*', async (req, res) => {
      const props = await getInitialProps(req.cookies.session)
      if (props?.configs?.theme) {
        res.cookie('theme', props?.configs?.theme, {
          maxAge: 365 * 24 * 60 * 60 * 1000
        })
      }
      nextServer.render(req, res, req.path, props as any)
    })

    app.all('*', (req: Request, res: Response) => {
      return handle(req, res)
    })

    const port = (() => {
      if (process.env.SERVER_PORT == 0) {
        return process.env.SERVER_SSL_ENABLE ? 443 : 80
      } else {
        return process.env.SERVER_PORT
      }
    })()

    server.listen(port, () => {
      console.info(`${chalk.green('[Info]')} Server running at port ${port}`)
      console.info(`${chalk.green('[Info]')} Startup completed successfully!`)
    })
  })
}).catch((err) => {
  console.error(`${chalk.red('[Error]')} Database connection fails`)
  throw err
})