import {UsersModel} from '../schemas/Users'
import {CodesModel} from '../schemas/Codes'

export const resetUser = async (userID: string) => {
  await UsersModel.updateOne({_id: userID}, {
    $unset: {
      preferredName: 1,
      email: 1,
      unconfirmedEmail: 1,
      password: 1,
      config: 1,
      student: 1,
      teacher: 1
    },
    status: 'UNREGISTERED',
    config: {
      theme: 'LIGHT'
    }
  })

  await CodesModel.deleteMany({user: userID})
}