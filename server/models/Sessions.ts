import bcrypt from 'bcrypt'
// import {getUserByLogin} from '../queries/Users'
import {Sessions} from '../schemas/Sessions'
import {Model} from '../types/Request'
import {Types} from 'mongoose'

export const getSessionByID = async (token: string) => {
  if (!Types.ObjectId.isValid(token)) return null
  return await Sessions.findById(token)
}

export const generateSession = async (userID: string, userType: string, agent: string, ip: string) => {
  return await Sessions.create({
    user: userID,
    userType: userType,
    ip: ip,
    agent: agent
  })
}

export const getSessionsList = async (userID: string) => {
  return await Sessions.find({user: userID}, 'user agent ip createAt')
}

export const deleteSession = async (sessionID: string) => {
  if (!Types.ObjectId.isValid(sessionID)) return false
  return (await Sessions.deleteOne({_id: sessionID})).deletedCount === 1
}