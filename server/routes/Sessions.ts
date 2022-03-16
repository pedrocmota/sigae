import {Router} from 'express'
import {compare} from 'bcrypt'
import {requireParams, protect} from '../middleware/requireParams'
import {requireSession} from '../middleware/requireSession'
import {slowDown} from '../middleware/rateLimit'
import {getUserByLogin} from '../models/Users'
import {
  getSessionByID,
  getSessionByToken,
  generateSession,
  getSessionsList,
  deleteSessionByID,
  deleteSessionByToken
} from '../models/Sessions'

const routes = Router()

routes.post('/sessions/login',
  requireParams({
    body: {
      login: 'string',
      password: 'string'
    }
  }),
  slowDown('medium'),
  async (req, res) => {
    const agent = protect(req.headers['user-agent'] || 'Desconhecido')
    const ip = req.clientIp || 'Desconhecido'
    const user = await getUserByLogin(req.body.login)
    if (user) {
      if (user.status === 'ACTIVE') {
        if (await compare(req.body.password, user.password)) {
          const token = await generateSession(user.id, user.type, agent, ip)
          if (req.headers['no-cookie'] === undefined) {
            res.cookie('session', token, {
              maxAge: process.env.SESSION_TIME as unknown as number * 1000,
              sameSite: 'strict'
            })
          }
          res.send({token: token})
        } else {
          return res.status(406).send({error: 'INCORRECT_PASSWORD'})
        }
      } else {
        if (user.status === 'UNREGISTERED') {
          return res.status(406).send({error: 'UNREGISTERED_ACCOUNT'})
        }
        if (user.status === 'UNCONFIRMED') {
          return res.status(406).send({
            error: 'UNCONFIRMED_ACCOUNT',
            registrationCode: user.registrationCode
          })
        }
        if (user.status === 'DISABLED') {
          return res.status(406).send({error: 'DISABLED_ACCOUNT'})
        }
        return res.status(406).send({error: 'UNKNOWN_STATUS'})
      }
    } else {
      return res.status(406).send({error: 'UNKNOWN_USER'})
    }
  })

routes.get('/sessions/list',
  requireSession(),
  slowDown('default'),
  async (req, res) => {
    res.send(await getSessionsList(req.session!.user, req.session!.token))
  })

routes.delete('/sessions/logout/token',
  requireParams({
    body: {
      sessionToken: 'string'
    }
  }),
  requireSession(),
  slowDown('high'),
  async (req, res) => {
    const sessionToken = req.body.session
    if (sessionToken) {
      const session = await getSessionByToken(sessionToken)
      if (session && session.user === req.session?.user) {
        if (sessionToken !== req.session?.token) {
          await deleteSessionByToken(sessionToken)
          return res.sendStatus(200)
        } else {
          return res.sendStatus(406)
        }
      } else {
        return res.sendStatus(403)
      }
    } else {
      return res.sendStatus(400)
    }
  })

routes.delete('/sessions/logout/cookie',
  slowDown('default'),
  async (req, res) => {
    const sessionToken = req.cookies?.session
    if (sessionToken) {
      await deleteSessionByToken(sessionToken)
      res.clearCookie('session')
      res.sendStatus(200)
    } else {
      return res.sendStatus(403)
    }
  })

routes.delete('/sessions/logout/id',
  requireParams({
    body: {
      sessionID: 'string'
    }
  }),
  requireSession(),
  slowDown('high'),
  async (req, res) => {
    const sessionID = req.body.sessionID
    if (sessionID) {
      const session = await getSessionByID(sessionID)
      if (session && session.user === req.session?.user) {
        await deleteSessionByID(sessionID)
        return res.sendStatus(200)
      } else {
        return res.sendStatus(403)
      }
    } else {
      return res.sendStatus(400)
    }
  })

export default routes