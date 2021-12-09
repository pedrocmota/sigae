import {SessionsModel} from '../schemas/Sessions'
import {Types} from 'mongoose'

export const getSessionByID = async (token: string) => {
  if (!Types.ObjectId.isValid(token)) return null
  return await SessionsModel.findById(token)
}

export const generateSession = async (userID: string, userType: string, agent: string, ip: string) => {
  return await SessionsModel.create({
    user: userID,
    userType: userType,
    ip: ip,
    agent: agent
  })
}

export const getSessionsList = async (userID: string) => {
  return await SessionsModel.find({user: userID}, 'user agent ip createAt')
}

export const deleteSession = async (sessionID: string) => {
  if (!Types.ObjectId.isValid(sessionID)) return false
  return (await SessionsModel.deleteOne({_id: sessionID})).deletedCount === 1
}