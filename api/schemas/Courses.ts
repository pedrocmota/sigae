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

export const CoursesModel = (
  mongoose.models.courses || mongoose.model('courses', schema)
) as mongoose.Model<ICourses, {}, {}, {}>