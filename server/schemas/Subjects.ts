import {mongoose} from '../database'

interface ISubjects {
  name: string
}

const schema = new mongoose.Schema<ISubjects>({
  name: {
    type: String,
    required: true
  }
})

export const SubjectsModel = (
  mongoose.models.subjects || mongoose.model('subjects', schema)
) as mongoose.Model<ISubjects, {}, {}, {}>