import {Router} from 'express'
import {requireSession} from '../middleware/requireSession'
import {slowDown} from '../middleware/rateLimit'
import {requirePermission} from '../middleware/requirePermission'
import {getUserByID} from '../models/Users'
import {resetUser} from '../models/Admin'

const routes = Router()

routes.delete('/admin/:id/reset',
  requireSession(),
  requirePermission({
    userTypes: ['ADMIN']
  }),
  slowDown('medium'),
  async (req, res) => {
    const user = await getUserByID(req.params.id)
    if (user) {
      await resetUser(req.params.id)
      return res.sendStatus(200)
    } else {
      return res.sendStatus(404)
    }
  })

export default routes