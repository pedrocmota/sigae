import dayjs from 'dayjs'
import {mongoose} from '../database'
import {user_types} from '../types/Global'

export interface ISessions {
  _id: string,
  token: string,
  user: string,
  userType: user_types,
  agent: string,
  ip: string,
  createAt: number,
  isCurrent: boolean
}

const schema = new mongoose.Schema<ISessions>({
  token: {
    type: String,
    required: true
  },
  user: {
    type: String,
    required: true
  },
  userType: {
    type: String,
    required: true
  },
  agent: {
    type: String,
    required: true
  },
  ip: {
    type: String,
    required: true
  },
  createAt: {
    type: Number,
    default: () => {
      return dayjs().unix()
    }
  }
}, {
  toObject: {
    getters: true
  }
})

export const SessionsModel = (
  mongoose.models.sessions || mongoose.model('sessions', schema)
) as mongoose.Model<ISessions, {}, {}, {}>