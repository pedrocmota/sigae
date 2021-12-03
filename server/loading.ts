import fs from 'fs'
import path from 'path'
import dotenv from 'dotenv'
import {cleanEnv, str, num, bool} from 'envalid'
import nodemailer from 'nodemailer'
import inline from 'nodemailer-plugin-inline-base64'
import {env} from './index'

export const loadConfig = () => {
  dotenv.config({path: path.resolve(process.cwd(), '.env')})
  return cleanEnv(process.env, {
    EXPRESS_CLIENT_HOST: str(),
    EXPRESS_API_HOST: str(),
    EXPRESS_PORT: num(),
    EXPRESS_SSL_ENABLE: bool(),
    EXPRESS_SSL_CERT: str(),
    EXPRESS_SSL_KEY: str(),
    EXPRESS_DISABLE_CORS: bool(),

    DATABASE_IP: str(),
    DATABASE_PORT: num(),
    DATABASE_USER: str(),
    DATABASE_PASSWORD: str(),
    DATABASE_UNIT: str(),

    PAYLOAD_JSON_SIZE: num(),
    PAYLOAD_FILE_SIZE: num(),
    BCRYPT_COST: num(),

    ROUTINES_ENABLE: bool(),
    ROUTINES_TIMEOUT: num(),

    SESSION_TIME: num(),
    CODE_CHANGE_PASSWORD_TIMEOUT: num(),
    CODE_CHANGE_EMAIL_TIMEOUT: num(),

    MAILER_HOST: str(),
    MAILER_PORT: num(),
    MAILER_ADDRESS: str(),
    MAILER_PASSWORD: str()
  })
}

export const loadCertificates = () => {
  try {
    const cert = fs.readFileSync(
      path.join(process.cwd(), `/server/config/certificates/${env.EXPRESS_SSL_CERT}`), 'utf-8'
    )
    const key = fs.readFileSync(
      path.join(process.cwd(), `/server/config/certificates/${env.EXPRESS_SSL_KEY}`), 'utf-8'
    )
    return {
      cert: cert,
      key: key
    }
  } catch (error) {
    return null
  }
}

export const loadSMTP = () => {
  const mailer = nodemailer.createTransport({
    host: env.MAILER_HOST,
    port: env.MAILER_PORT,
    secure: true,
    auth: {
      user: env.MAILER_ADDRESS,
      pass: env.MAILER_PASSWORD
    }
  })
  mailer.use('compile', inline({cidPrefix: 'somePrefix_'}))
  return mailer
}