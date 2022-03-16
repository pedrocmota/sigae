import Randomstring from 'randomstring'
import {SessionsModel} from '../schemas/Sessions'
import {Types} from 'mongoose'

export const getSessionByID = async (id: string) => {
  if (!Types.ObjectId.isValid(id)) return null
  return await SessionsModel.findById(id)
}

export const getSessionByToken = async (token: string) => {
  return await SessionsModel.findOne({token: token})
}

export const generateSession = async (userID: string, userType: string, agent: string, ip: string) => {
  const token = Randomstring.generate({
    length: 24,
    charset: 'alphanumeric'
  })
  await SessionsModel.create({
    token: token,
    user: userID,
    userType: userType,
    ip: ip,
    agent: agent
  })
  return token
}

export const getSessionsList = async (userID: string, currentSession: string) => {
  const sessions = await SessionsModel
    .find({user: userID}, 'token user agent ip createAt')
    .lean().sort([['createAt', 'desc']])
  return sessions.map(((session) => {
    session._id = session._id.toString()
    session.isCurrent = session.token === currentSession
    return session
  })).sort((a, b) => (a.isCurrent < b.isCurrent) ? 1 : -1)
}

export const deleteSessionByID = async (sessionID: string) => {
  if (!Types.ObjectId.isValid(sessionID)) return false
  return (await SessionsModel.deleteOne({_id: sessionID})).deletedCount === 1
}

export const deleteSessionByToken = async (token: string) => {
  return (await SessionsModel.deleteOne({token: token})).deletedCount === 1
}