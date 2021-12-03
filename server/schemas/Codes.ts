import {mongoose} from '../database'

interface ICodes {
  code: string,
  user: string,
  datetime: string,
  type: string,
  props: {
    tempEmail: string
  }
}

const schema = new mongoose.Schema<ICodes>({
  code: {
    type: String,
    required: true,
    unique: true
  },
  user: {
    type: String,
    required: true
  },
  datetime: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  props: {
    tempEmail: {
      type: String
    }
  }
})

export const CodesModel = (
  mongoose.models.codes || mongoose.model('codes', schema)
) as mongoose.Model<ICodes, {}, {}, {}>