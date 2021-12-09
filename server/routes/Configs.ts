import {Router} from 'express'
import {slowDown} from '../middleware/rateLimit'

const routes = Router()

routes.get('/configs/initials',
  slowDown('low'),
  async (req, res) => {
    res.send('')
  })

export default routes