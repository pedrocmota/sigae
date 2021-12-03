import express, {Request, Response, NextFunction} from 'express'
import next from 'next'
import http from 'http'
import https from 'https'
import cookieParser from 'cookie-parser'
import requestip from 'request-ip'
import fileUpload from 'express-fileupload'
import chalk from 'chalk'
import dedent from 'dedent'
import 'express-async-errors'
import {loadConfig, loadCertificates, loadSMTP} from './loading'
import {conn} from './database'

export const isDev = process.env.NODE_ENV !== 'production'
export const nextServer = next({dev: isDev})
export const handle = nextServer.getRequestHandler()
export const env = loadConfig()
export const mailer = loadSMTP()

import Sessions from './routes/Sessions'
import Configs from './routes/Configs'

import {getInitialProps} from './models/Configs'

console.info(dedent(`
  ${chalk.green('[Server]')} Iniciando servidor Node ${chalk.cyan(`${process.version}`)}
`))

conn.then(async () => {
  console.info(dedent(`
    ${chalk.green('[Server]')} Banco de dados conectado com sucesso
  `))

  nextServer.prepare().then(() => {
    const app = express()
    const server = (() => {
      if (env.EXPRESS_SSL_ENABLE) {
        const cert = loadCertificates()
        if (cert === null) {
          console.error(chalk.red('Certificado não encontrado'))
          process.exit(0)
        }
        return https.createServer(cert, app)
      } else {
        return http.createServer(app)
      }
    })()

    app.use(cookieParser())
    app.use(express.json({
      limit: env.PAYLOAD_JSON_SIZE
    }))
    app.use(fileUpload({
      limits: {
        fileSize: env.PAYLOAD_FILE_SIZE
      },
      abortOnLimit: true
    }))

    app.use(requestip.mw())
    app.disable('x-powered-by')

    app.use('/api', Sessions)
    app.use('/api', Configs)

    app.all('/api/*', (req, res) => {
      res.status(404).send({error: 'NOT_FOUND'})
    })

    app.all('/api', (req, res) => {
      res.send({info: 'API SiGAÊ. Consulte a documentação para a listagem de rotas'})
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

    server.listen(env.EXPRESS_PORT, () => {
      console.info(dedent(`
        ${chalk.green('[Server]')} Inicialização concluída com sucesso!
      `))
    })
  })
})