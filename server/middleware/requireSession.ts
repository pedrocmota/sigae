import {Request, Response, NextFunction} from 'express'
import {getSessionByID} from '../models/Sessions'
import {user_types} from '../types/Global'

export const requireSession = (permissions?: user_types[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    if (typeof req.headers.session === 'string') {
      const id = req.headers.session
      const session = await getSessionByID(id)
      if (session) {
        if (permissions && !permissions.includes(session.userType)) {
          return res.status(403).send({error: 'ACCESS_DENIED'})
        }
        req.session = {
          user: session.user,
          userType: session.userType,
          agent: session.agent,
          ip: session.ip,
          createAt: session.createAt
        }
        next()
      } else {
        return res.status(401).send({error: 'INVALID_SESSION'})
      }
    } else {
      return res.status(401).send({error: 'MISSING_SESSION'})
    }
  }
}