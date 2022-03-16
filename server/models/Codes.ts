import {generate} from 'randomstring'
import {CodesModel} from '../schemas/Codes'
import {codes_types} from '../types/Global'

export const getCode = async (code: string, type: codes_types) => {
  return await CodesModel.findOne({code: code, type: type}).exec()
}

export const getCodesByUser = async (user: string, type: codes_types) => {
  return await CodesModel.find({user: user, type: type}).exec()
}

export const generateCode = async (user: string, type: codes_types) => {
  const code = generate({
    length: 8,
    charset: 'alphanumeric',
    capitalization: 'uppercase'
  })
  CodesModel.create({
    code: code,
    user: user,
    datetime: Math.round(Date.now() / 1000),
    type: type
  })
  return code
}

export const getUserCode = async (user: string, type: codes_types) => {
  const codes = await getCodesByUser(user, type)
  if (codes.length > 0) {
    return codes[0].code
  } else {
    return await generateCode(user, type)
  }
}

export const deleteCode = async (code: string) => {
  return CodesModel.deleteOne({code: code})
}

export const deleteCodeByUser = async (user: string, type?: codes_types) => {
  return CodesModel.deleteOne({
    user: user,
    ...(type && {type: type})
  })
}