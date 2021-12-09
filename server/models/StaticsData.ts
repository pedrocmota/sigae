import {CampusModel} from '../schemas/Campus'
import {CoursesModel} from '../schemas/Courses'
import {ClassesModel} from '../schemas/Classes'
import {SubjectsModel} from '../schemas/Subjects'

export const getAllCampus = async () => {
  return await CampusModel.find()
}

export const getAllCourses = async () => {
  return await CoursesModel.find()
}

export const getAllClasses = async () => {
  return await ClassesModel.find()
}

export const getClass = async (classCode: string) => {
  return await ClassesModel.findOne({name: classCode})
}

export const getAllClassesByCampus = async (campus: string) => {
  return await ClassesModel.find({campus: campus})
}

export const getAllClassesByCourse = async (course: string) => {
  return await ClassesModel.find({course: course})
}

export const getAllCoursesWithClasses = async () => {
  const allClasses = await getAllClasses()
  const formated = {}
  const campis = Array.from(new Set(allClasses.map((e) => e.campus)))
  campis.forEach((campus) => {
    const courses = {}
    allClasses.forEach((entrie) => {
      if (entrie.campus === campus) {
        const course = courses[entrie.course]
        if (course) {
          courses[entrie.course] = [...courses[entrie.course], entrie.name]
        } else {
          courses[entrie.course] = [entrie.name]
        }
      }
    })
    formated[campus] = courses
  })
  return formated
}

export const getAllSubjects = async () => {
  return await SubjectsModel.find()
}