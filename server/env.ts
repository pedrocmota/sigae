import path from 'path'
import dotenv from 'dotenv'
import {cleanEnv, str, num, bool} from 'envalid'

dotenv.config({path: path.resolve(process.cwd(), '.env')})
process.env = Object.assign(process.env, cleanEnv(process.env, {
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
}))