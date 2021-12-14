import {mongoose} from '../database'
import {user_states, user_types, themeNames} from '../types/Global'

export interface IUser {
  name: string,
  preferredName: string,
  userNumber: string,
  email: string,
  unconfirmedEmail: string,
  password: string,
  campus: string,
  registrationCode: string,
  type: user_types,
  status: user_states,
  student: {
    course: string,
    classNumber: string
  },
  teacher: {
    subjects: string[]
  },
  permissions: IPermissions,
  configs: IUserConfig
}

export interface IPermissions {
  createClasses: boolean,
  enterClasses: boolean,
  changeAvatar: boolean
}

export interface IUserConfig {
  theme: themeNames
}

const schema = new mongoose.Schema<IUser>({
  name: {
    type: String,
    required: true
  },
  preferredName: {
    type: String
  },
  userNumber: {
    type: String,
    required: true
  },
  email: {
    type: String,
    lowercase: true
  },
  unconfirmedEmail: {
    type: String,
    lowercase: true
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
      type: [String],
      default: undefined
    }
  },
  permissions: {
    createClasses: {
      type: Boolean,
      default: function () {
        const db = this as unknown as IUser | undefined
        return db?.type === 'TEACHER' || db?.type === 'ADMIN' ? true : false
      }
    },
    enterClasses: {
      type: Boolean,
      default: true
    },
    changeAvatar: {
      type: Boolean,
      default: true
    }
  },
  configs: {
    theme: {
      type: String,
      default: 'LIGHT'
    }
  }
})

export const UsersModel = (
  mongoose.models.users || mongoose.model('users', schema)
) as mongoose.Model<IUser, {}, {}, {}>