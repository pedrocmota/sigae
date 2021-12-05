import {UsersModel} from '../schemas/Users'
import bcrypt from 'bcrypt'
import {Types} from 'mongoose'
import {env} from '../index'

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

export const setUserPassword = async (userID: string, password: string) => {
  const hash = await bcrypt.hash(password, env.BCRYPT_COST)
  return await UsersModel.updateOne({_id: userID}, {
    password: hash
  })
}