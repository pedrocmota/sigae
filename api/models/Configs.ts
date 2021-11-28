import {UsersModel} from '../schemas/Users'
import {IUserConfig} from '../schemas/Users'
import {Types} from 'mongoose'

export const getUserConfig = async (userID: string | undefined) => {
  if (!Types.ObjectId.isValid(userID || '')) return null
  const query = await UsersModel.findOne({_id: userID || ''}, 'configs').exec()
  return query?.configs || null
}