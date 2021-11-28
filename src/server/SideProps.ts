import {parse as cookieParser} from 'cookie'
import {getSessionByID} from '../../api/models/Sessions'
import {getUserConfig} from '../../api/models/Configs'

export const getPageSession = async (context) => {
  const cookies = cookieParser(context.req.headers.cookie || '')
  if (cookies.session) {
    return await getSessionByID(cookies.session)
  } else {
    return null
  }
}

export const getConfig = async (userID: string) => {
  return await getUserConfig(userID)
}