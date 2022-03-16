import {getSessionByToken} from './Sessions'
import {getUserByID} from './Users'
import {themeNames} from '../types/Global'
import {IPermissions} from '../schemas/Users'

export interface IUserInitialProps {
  id: string,
  name: string,
  preferredName: string,
  userNumber: string,
  email: string,
  campus: string,
  course?: string,
  class?: string,
  subjects?: string[],
  type: string
}

export interface IInitialProps {
  auth: boolean,
  user?: IUserInitialProps,
  configs?: {
    theme: themeNames
  },
  permissions?: IPermissions,
  cookieTheme?: themeNames,
  misc?: {
    newEmail?: string
  }
}

export const getInitialProps = async (token: string | undefined) => {
  const session = await getSessionByToken(token || '')
  if (session) {
    const user = await getUserByID(session.user)
    if (user) {
      return {
        auth: true,
        user: {
          id: user.id,
          name: user.name,
          preferredName: user.preferredName,
          userNumber: user.userNumber,
          email: user.email,
          campus: user.campus,
          course: user?.student?.course,
          class: user?.student?.classNumber,
          subjects: user?.teacher?.subjects,
          type: user.type
        },
        configs: user?.configs,
        permissions: user.permissions
      } as IInitialProps
    } else {
      return {
        auth: false
      }
    }
  } else {
    return {
      auth: false
    }
  }
}

export const isAuth = async (token: string | undefined) => {
  const session = await getSessionByToken(token || '')
  return session !== null
}