import {UsersModel} from '../schemas/Users'

export const emailAlreadyUsed = async (email: string) => {
  return await UsersModel.count({
    $or: [{
      email: email
    }, {
      unconfirmedEmail: email
    }]
  }) > 0
}

export const emailIsUnconfirmed = async (email: string) => {
  return await UsersModel.count({
    unconfirmedEmail: email
  }) > 0
}

export const addUnconfirmedEmail = async (user: string, email: string) => {
  return await UsersModel.updateOne({
    _id: user
  }, {
    unconfirmedEmail: email
  })
}

export const deleteUnconfirmedEmail = async (email: string) => {
  return await UsersModel.updateOne({
    unconfirmedEmail: email
  }, {
    $unset: {unconfirmedEmail: 1}
  })
}

export const changeEmail = async (user: string, email: string) => {
  return await UsersModel.updateOne({
    _id: user
  }, {
    email: email
  })
}