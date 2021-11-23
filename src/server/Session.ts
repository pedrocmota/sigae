import {parse as cookieParser} from 'cookie'

export const getPageSession = (context) => {
  const cookies = cookieParser(context.req.headers.cookie || '')
  return cookies?.session || null
}