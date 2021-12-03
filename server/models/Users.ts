import {UsersModel} from '../schemas/Users'

export const getUserByLogin = async (login: string) => {
  return await UsersModel.findOne({$or: [{userNumber: login}, {email: login}]}).exec()
}