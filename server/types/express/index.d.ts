import express from 'express'
import {ISessions} from '../../schemas/Sessions'

declare global {
  namespace Express {
    interface Request {
      session?: ISessions
    }
  }

  namespace NodeJS {
    interface ProcessEnv {
      EXPRESS_CLIENT_HOST: string,
      EXPRESS_API_HOST: string,
      EXPRESS_PORT: string,
      EXPRESS_SSL_ENABLE: string,
      EXPRESS_SSL_CERT: string,
      EXPRESS_SSL_KEY: string,
      EXPRESS_DISABLE_CORS: string,

      DATABASE_IP: string,
      DATABASE_PORT: string,
      DATABASE_USER: string,
      DATABASE_PASSWORD: string,
      DATABASE_UNIT: string,

      PAYLOAD_JSON_SIZE: string,
      PAYLOAD_FILE_SIZE: string,
      BCRYPT_COST: string,

      ROUTINES_ENABLE: string,
      ROUTINES_TIMEOUT: string,

      SESSION_TIME: string,
      CODE_CHANGE_PASSWORD_TIMEOUT: string,
      CODE_CHANGE_EMAIL_TIMEOUT: string,

      MAILER_HOST: string,
      MAILER_PORT: string,
      MAILER_ADDRESS: string,
      MAILER_PASSWORD: string
    }
  }
}