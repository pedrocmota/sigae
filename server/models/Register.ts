import {getUserByRegisterCode} from '../models/Users'
import {getAllCourses, getAllCoursesWithClasses, getAllSubjects} from '../models/StaticsData'
import {user_states} from '../types/Global'

export const getRegistrationInfos = async (registerCode: string) => {
  const user = await getUserByRegisterCode(registerCode)
  if (user?.status === 'UNREGISTERED') {
    return {
      name: user.name,
      userNumber: user.userNumber,
      type: user.type,
      campus: user.campus,
      status: 'UNREGISTERED' as user_states,
      ...user.type === 'STUDENT' && {
        courses: (await getAllCourses()).map(e => e.name),
        classeCodes: await getAllCoursesWithClasses()
      },
      ...user.type === 'TEACHER' && {
        subjects: (await getAllSubjects()).map((e) => e.name)
      }
    }
  }
  if (user?.status === 'UNCONFIRMED') {
    return {
      status: 'UNCONFIRMED' as user_states
    }
  }
  return null
}

export const getValidationInfos = async (registerCode: string) => {
  const user = await getUserByRegisterCode(registerCode)
  if (user?.status === 'UNCONFIRMED') {
    return {
      name: user.preferredName,
      email: user.email
    }
  } else {
    return null
  }
}