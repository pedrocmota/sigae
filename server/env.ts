import path from 'path'
import dotenv from 'dotenv'
import {cleanEnv, str, num, bool} from 'envalid'

dotenv.config({path: path.resolve(process.cwd(), '.env')})

const cleared = cleanEnv(process.env, {
  CLIENT_HOST: str(),
  SERVER_PORT: num(),
  SERVER_SSL_ENABLE: bool(),
  SERVER_SSL_CERT: str(),
  SERVER_SSL_KEY: str(),

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

export type envCleared = typeof cleared

Object.keys(cleared).forEach((key) => {
  process.env[key] = cleared[key]
})