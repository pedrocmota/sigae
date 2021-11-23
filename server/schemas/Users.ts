import {mongoose} from '../database'

export interface IUser {
  name: string,
  preferred_name: string,
  userNumber: string,
  email: string,
  password: string,
  campus: string,
  registrationCode: string,
  type: string,
  status: string,
  student: {
    course: string,
    class: string
  },
  teacher: {
    subjects: string[]
  },
  configs: {
    theme: string
  }
}

const schema = new mongoose.Schema<IUser>({
  name: {
    type: String,
    required: true
  },
  preferred_name: {
    type: String
  },
  userNumber: {
    type: String,
    required: true
  },
  email: {
    type: String,
    lowercase: true,
    unique: false
  },
  password: {
    type: String
  },
  campus: {
    type: String,
    required: true
  },
  registrationCode: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true,
    default: 'UNREGISTERED'
  },
  student: {
    course: {
      type: String
    },
    classNumber: {
      type: String
    }
  },
  teacher: {
    subjects: {
      type: [String]
    }
  },
  configs: {
    theme: {
      type: String,
      default: 'LIGHT'
    }
  }
})

export const Users = mongoose.model('users', schema)