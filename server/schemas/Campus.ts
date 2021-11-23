import {mongoose} from '../database'

interface ICampus {
  name: string
}

const schema = new mongoose.Schema<ICampus>({
  name: {
    type: String,
    required: true
  }
})

export const Campus = mongoose.model('campus', schema)