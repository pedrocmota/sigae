import {Router} from 'express'
import {requireParams} from '../middleware/requireParams'
import {slowDown, rateLimit} from '../middleware/rateLimit'
import {sendChangePasswordEmail} from '../models/Mailer'
import {getCode, deleteCode} from '../models/Codes'
import {setUserPassword} from '../models/Users'
import {validatePassword} from '../validations/Data'

const routes = Router()

routes.post('/codes/password/send',
  requireParams({
    body: {
      email: 'string'
    }
  }),
  rateLimit('onePerMinute'),
  async (req, res) => {
    sendChangePasswordEmail(req.body.email)
    res.sendStatus(200)
  })

routes.put('/codes/password/change',
  requireParams({
    body: {
      code: 'string',
      password: 'string'
    }
  }),
  slowDown('high'),
  async (req, res) => {
    const code = await getCode(req.body.code, 'CHANGE_PASSWORD')
    if (code) {
      if (validatePassword(req.body.password)) {
        await deleteCode(code.code)
        await setUserPassword(code.user, req.body.password)
        return res.sendStatus(200)
      } else {
        return res.status(406).send({error: 'INVALID_PASSWORD'})
      }
    } else {
      return res.status(406).send({error: 'UNKNOWN_CODE'})
    }
  })

export default routes