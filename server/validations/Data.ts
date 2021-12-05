import {constainsChar} from '../utils/stringUtils'
import {getPreferredNames} from '../utils/stringUtils'
import {getUserByEmail} from '../models/Users'
// import {getClassData, getAllSubjects} from '../models/Statics'

export const validatePreferredName = (full: string, preferred: string) => {
  const names = getPreferredNames(full)
  return names.includes(preferred)
}

export const validateEmail = (email: string) => {
  if (email.length <= 0) return false
  var regex = /\S+@\S+\.\S+/
  return regex.test(email)
}

export const emailAlreadyUsed = async (email: string) => {
  const user = await getUserByEmail(email)
  return user !== undefined
}

export const validatePassword = (str: string) => {
  if (str.length < 6) return false
  if (str.length > 500) return false
  if (!constainsChar(str, 'QWERTYUIOPASDFGHJKLÇZXCVBNM')) return false
  if (!constainsChar(str, '1234567890')) return false
  if (!constainsChar(str, '\'^£$%&*()}{@#~?><>,|=_+¬-]/!')) return false
  return true
}

// export const validateCourseAndClass = async (course: string, classe: string) => {
//   const classData = await getClassData(classe)
//   if (classData !== undefined) {
//     return classData.course === course
//   } else {
//     return false
//   }
// }

// export const validateSubjects = async (subjects: string[]) => {
//   const subjectsObject = await getAllSubjects()
//   const allSubjects = subjectsObject.map(v => v.name)
//   return allSubjects.some(v => subjects.includes(v))
// }