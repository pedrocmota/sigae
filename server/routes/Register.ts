import {Router} from 'express'
import {hash} from 'bcrypt'
import {requireParams} from '../middleware/requireParams'
import {slowDown, rateLimit} from '../middleware/rateLimit'
import {getUserByRegisterCode, setUserStatus} from '../models/Users'
import {getRegistrationInfos, getValidationInfos} from '../models/Register'
import {emailAlreadyUsed} from '../models/Email'
import {sendRegisterEmail} from '../models/Mailer'
import {getCode, deleteCode, deleteCodeByUser} from '../models/Codes'
import {resetUser} from '../models/Admin'
import {UsersModel} from '../schemas/Users'
import {
  validatePreferredName,
  validateEmail,
  validatePassword,
  validateCourseAndClass,
  validateSubjects
} from '../validations/Data'

const routes = Router()

routes.get('/registration/:code/check',
  slowDown('high'),
  async (req, res) => {
    const user = await getUserByRegisterCode(req.params.code)
    if (user?.status === 'UNREGISTERED') {
      return res.sendStatus(200)
    } else {
      return res.sendStatus(406)
    }
  })

routes.get('/registration/:code',
  slowDown('high'),
  async (req, res) => {
    const infos = await getRegistrationInfos(req.params.code)
    if (infos) {
      return res.send(infos)
    } else {
      return res.sendStatus(404)
    }
  })

routes.post('/registration/:code/register',
  requireParams({
    body: {
      preferredName: 'string',
      email: 'string',
      password: 'string'
    },
    opcionalBody: {
      course: 'string',
      class: 'string',
      subjects: 'string[]'
    }
  }),
  slowDown('medium'),
  async (req, res) => {
    const user = await getUserByRegisterCode(req.params.code)
    if (user) {
      if (user.status === 'UNREGISTERED') {
        if (!validatePreferredName(user.name, req.body.preferredName)) {
          return res.status(406).send({error: 'INVALID_PREFERRED_NAME'})
        }
        if (!validateEmail(req.body.email)) {
          return res.status(406).send({error: 'INVALID_EMAIL'})
        }
        if (await emailAlreadyUsed(req.body.email)) {
          return res.status(406).send({error: 'EMAIL_ALREADY_USED'})
        }
        if (!validatePassword(req.body.password)) {
          return res.status(406).send({error: 'INVALID_PASSWORD'})
        }
        if (user.type === 'STUDENT') {
          if (!await validateCourseAndClass(req.body.course, req.body.class)) {
            return res.status(406).send({error: 'INVALID_COURSE_OR_CLASS'})
          }
        }
        if (user.type === 'TEACHER') {
          if ((req.body.subjects as String[]).length === 0) {
            return res.status(406).send({error: 'EMPTY_SUBJECTS_LIST'})
          }
          if (!await validateSubjects(req.body.subjects)) {
            return res.status(406).send({error: 'INVALID_SUBJECTS_LIST'})
          }
        }
        await UsersModel.updateOne({registrationCode: req.params.code}, {
          preferredName: req.body.preferredName,
          email: req.body.email,
          password: await hash(req.body.password, parseInt(process.env.BCRYPT_COST)),
          status: 'UNCONFIRMED',
          student: {
            course: req.body.course,
            classNumber: req.body.class
          }
        })
        sendRegisterEmail(req.body.email)
        await deleteCodeByUser(user.id, 'REGISTRATION')
        return res.sendStatus(200)
      } else {
        return res.status(406).send({error: 'USER_ALREADY_REGISTERED'})
      }
    } else {
      return res.status(404).send({error: 'UNKNOWN_CODE'})
    }
  })

routes.get('/registration/:code/validation',
  slowDown('high'),
  async (req, res) => {
    const infos = await getValidationInfos(req.params.code)
    if (infos) {
      return res.send(infos)
    } else {
      return res.sendStatus(404)
    }
  })

routes.post('/registration/:code/validation/confirm',
  requireParams({
    body: {
      emailCode: 'string'
    }
  }),
  slowDown('medium'),
  async (req, res) => {
    const user = await getUserByRegisterCode(req.params.code)
    if (user) {
      const code = await getCode(req.body.emailCode, 'REGISTRATION')
      if (code) {
        await deleteCode(code.code)
        await setUserStatus(user.id, 'ACTIVE')
        return res.sendStatus(200)
      } else {
        return res.status(406).send({error: 'INCORRECT_CODE'})
      }
    } else {
      return res.status(406).send({error: 'INVALID_USER'})
    }
  })

routes.post('/registration/:code/resend',
  rateLimit('onePerMinute'),
  async (req, res) => {
    const user = await getUserByRegisterCode(req.params.code)
    if (user?.status === 'UNCONFIRMED') {
      sendRegisterEmail(user.email)
      return res.sendStatus(200)
    } else {
      return res.status(406).send({error: 'INVALID_USER'})
    }
  })

routes.delete('/registration/:code/cancel',
  slowDown('high'),
  async (req, res) => {
    const user = await getUserByRegisterCode(req.params.code)
    if (user?.status === 'UNCONFIRMED') {
      await resetUser(user.id)
      return res.sendStatus(200)
    } else {
      return res.status(406).send({error: 'INVALID_USER'})
    }
  })

export default routes