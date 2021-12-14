import {Router} from 'express'
import {requireSession} from '../middleware/requireSession'
import {slowDown} from '../middleware/rateLimit'
import {getInitialProps} from '../models/Props'
import {getUserPermissions} from '../models/Users'
import {getProfile} from '../models/Profile'

const routes = Router()

routes.get('/user/props/initials',
  slowDown('low'),
  async (req, res) => {
    const props = await getInitialProps(req.headers?.session?.toString())
    return res.send(props)
  })

routes.get('/user/props/permissions',
  requireSession(),
  slowDown('low'),
  async (req, res) => {
    const permissions = await getUserPermissions(req!.session!.user)
    res.send(permissions)
  })

routes.get('/user/profile',
  slowDown('low'),
  async (req, res) => {
    const id = req.session?.user
    const data = await getProfile(id || '')
    return res.contentType('image/jpeg').send(data)
  })

routes.get('/user/profile/:id',
  slowDown('low'),
  async (req, res) => {
    const data = await getProfile(req.params.id)
    return res.contentType('image/jpeg').send(data)
  })

export default routes