import {mongoose} from '../database'

interface ICourses {
  name: string
}

const schema = new mongoose.Schema<ICourses>({
  name: {
    type: String,
    required: true
  }
})

export const Courses = mongoose.model('courses', schema)