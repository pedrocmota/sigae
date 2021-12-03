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

export const CampusModel = (
  mongoose.models.campus || mongoose.model('campus', schema)
) as mongoose.Model<ICampus, {}, {}, {}>