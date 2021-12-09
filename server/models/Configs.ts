import {UsersModel} from '../schemas/Users'
import {getSessionByID} from './Sessions'
import {themeNames} from '../types/Global'

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
  user?: IUserInitialProps,
  configs?: {
    theme: themeNames
  },
  cookieTheme?: themeNames,
  misc?: {
    newEmail?: string
  }
}

export const getInitialProps = async (token: string | undefined) => {
  const session = await getSessionByID(token || '')
  if (session) {
    const user = await UsersModel.findOne({_id: session.user || ''})
    if (user) {
      return {
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
        configs: user?.configs
      }
    } else {
      return {}
    }
  } else {
    return {}
  }
}