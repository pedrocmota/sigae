import fs from 'fs'
import path from 'path'
import {getUserByEmail, getUserByID} from './Users'
import {getUserCode} from './Codes'
import {emails_types, IRecoveryProps, IRegisterProps} from '../types/Global'
import {mailer} from '../index'

const sendMail = async <T extends unknown>(
  to: string[], title: string, htmlFile: emails_types, props: T
) => {
  let html = fs.readFileSync(path.resolve(__dirname, `../static/emails/${htmlFile}.html`)).toString()
  Object.keys(props as any).forEach((variable) => {
    const value = props[variable] as string
    html = html.replace(`{${variable}}`, value)
  })
  try {
    await mailer.sendMail({
      from: process.env.MAILER_ADDRESS,
      to: to,
      subject: title,
      html: html
    })
    return true
  } catch (error) {
    return false
  }
}

export const sendChangePasswordEmail = async (email: string) => {
  const user = await getUserByEmail(email)
  if (user && user.status === 'ACTIVE') {
    const code = await getUserCode(user.id, 'CHANGE_PASSWORD')
    sendMail<IRecoveryProps>([email], 'SiGAÊ - Recuperação de conta', 'recovery', {
      name: user.preferredName,
      link: `${process.env.CLIENT_HOST}/codigo/${code}`
    })
  }
}

export const sendRegisterEmail = async (email: string) => {
  const user = await getUserByEmail(email)
  const code = await getUserCode(user!.id, 'REGISTRATION')
  await sendMail<IRegisterProps>([email], 'SiGAÊ - Verificação de e-mail', 'register', {
    name: user!.preferredName,
    code: code
  })
}

export const sendChangeEmailEmail = async (userID: string, email: string) => {
  const user = await getUserByID(userID)
  const code = await getUserCode(user!.id, 'CHANGE_EMAIL')
  sendMail<IRegisterProps>([email], 'SiGAÊ - Alterar E-mail', 'changeEmail', {
    name: user!.preferredName,
    code: code
  })
}