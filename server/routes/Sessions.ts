import {Router} from 'express'
import {compare} from 'bcrypt'
import {requireParams, protect} from '../middleware/requireParams'
import {requireSession} from '../middleware/requireSession'
import {slowDown} from '../middleware/rateLimit'
import {getUserByLogin} from '../models/Users'
import {getSessionByID, generateSession, getSessionsList, deleteSession} from '../models/Sessions'

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
          const session = await generateSession(user.id, user.type, agent, ip)
          res.cookie('session', session._id, {
            maxAge: process.env.SESSION_TIME as unknown as number * 1000
          })
          res.send({token: session._id})
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
    res.send(await getSessionsList(req.session!.user))
  })

routes.get('/sessions/:session',
  requireSession(),
  slowDown('default'),
  async (req, res) => {
    const session = await getSessionByID(req.params.session)
    if (session) {
      if (session.user === req.session?.user) {
        return res.send(session)
      } else {
        return res.sendStatus(403).send({error: 'ACCESS_DENIED'})
      }
    } else {
      return res.status(404).send({error: 'UNKNOW_SESSION'})
    }
  })

routes.delete('/sessions/:session/logout',
  requireParams(),
  requireSession(),
  slowDown('default'),
  async (req, res) => {
    const deleted = await deleteSession(req.params.session)
    if (deleted) {
      return res.sendStatus(200)
    } else {
      return res.status(406).send({error: 'INVALID_SESSION'})
    }
  })

export default routes