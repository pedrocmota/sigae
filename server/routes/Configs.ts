import {Router} from 'express'
import {compare} from 'bcrypt'
import {requireParams, protect} from '../middleware/requireParams'
import {requireSession} from '../middleware/requireSession'
import {slowDown} from '../middleware/rateLimit'
import {getUserByLogin} from '../models/Users'
import {getSessionByID, generateSession, getSessionsList, deleteSession} from '../models/Sessions'

const routes = Router()

routes.post('/configs',
  requireSession(),
  slowDown('medium'),
  async (req, res) => {

  })

export default routes