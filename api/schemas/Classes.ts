import {mongoose} from '../database'

interface IClasses {
  name: string,
  campus: string,
  course: string
}

const schema = new mongoose.Schema<IClasses>({
  name: {
    type: String,
    required: true
  },
  campus: {
    type: String,
    required: true
  },
  course: {
    type: String,
    required: true
  }
})

export const ClassesModel = (
  mongoose.models.classes || mongoose.model('classes', schema)
) as mongoose.Model<IClasses, {}, {}, {}>