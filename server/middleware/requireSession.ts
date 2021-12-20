import {Request, Response, NextFunction} from 'express'
import {getSessionByID} from '../models/Sessions'

export const requireSession = () => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const sessionToken = req.headers?.session || req.cookies?.session || undefined
    if (typeof sessionToken === 'string') {
      const session = await getSessionByID(sessionToken)
      if (session) {
        req.session = {
          token: session.id,
          user: session.user,
          userType: session.userType,
          agent: session.agent,
          ip: session.ip,
          createAt: session.createAt
        }
        next()
      } else {
        res.clearCookie('session')
        return res.status(401).send({error: 'INVALID_SESSION'})
      }
    } else {
      res.clearCookie('session')
      return res.status(401).send({error: 'INVALID_SESSION'})
    }
  }
}