import {Users} from '../schemas/Users'

export const getUserByLogin = async (login: string) => {
  return await Users.findOne({$or: [{userNumber: login}, {email: login}]}).exec()
}