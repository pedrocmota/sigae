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

export const Subjects = mongoose.model('subjects', schema)