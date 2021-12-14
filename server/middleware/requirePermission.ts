import {Request, Response, NextFunction} from 'express'
import {IPermissions} from '../schemas/Users'
import {getUserPermissions} from '../models/Users'
import {user_types} from '../types/Global'

interface IRequirePermission {
  userTypes?: user_types[],
  permissions?: Array<keyof IPermissions>
}

export const requirePermission = (props?: IRequirePermission) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    if (req.session) {
      const permissions = await getUserPermissions(req.session.user)
      if (permissions) {
        if (props?.userTypes) {
          if (!props.userTypes.includes(req.session.userType)) {
            return res.status(403).send({error: 'ACCESS_DENIED_BY_USER_TYPE'})
          }
          if (props?.permissions) {
            if (!props.permissions.every(p => permissions[p] === true)) {
              return res.status(403).send({error: 'ACCESS_DENIED_BY_USER_PERMISSIONS'})
            }
          }
        }
        next()
      } else {
        return res.status(500).send({error: 'INVALID_USER_PERMISSIONS'})
      }
    } else {
      next()
    }
  }
}