import {UsersModel} from '../schemas/Users'
import bcrypt from 'bcrypt'
import {Types} from 'mongoose'
import {user_states} from '../../server/types/Global'

export const getUserByID = async (userID: string) => {
  if (!Types.ObjectId.isValid(userID)) return null
  return await UsersModel.findById(userID)
}

export const getUserByLogin = async (login: string) => {
  return await UsersModel.findOne({$or: [{userNumber: login}, {email: login}]})
}

export const getUserByEmail = async (email: string) => {
  return await UsersModel.findOne({email: email})
}

export const getUserByRegisterCode = async (registerCode: string) => {
  return await UsersModel.findOne({registrationCode: registerCode})
}

export const setUserPassword = async (userID: string, password: string) => {
  const hash = await bcrypt.hash(password, parseInt(process.env.BCRYPT_COST))
  return await UsersModel.updateOne({_id: userID}, {
    password: hash
  })
}

export const setUserStatus = (userID: string, status: user_states) => {
  return UsersModel.updateOne({_id: userID}, {
    status: status
  })
}