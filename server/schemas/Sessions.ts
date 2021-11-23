import {mongoose} from '../database'
import {user_types} from '../types/Global'

export interface ISessions {
  user: string,
  userType: user_types,
  agent: string,
  ip: string,
  createAt: number
}

const schema = new mongoose.Schema<ISessions>({
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
    default: Date.now
  }
})

export const Sessions = mongoose.model('sessions', schema)