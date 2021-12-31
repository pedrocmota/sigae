import express from 'express'
import {ISessions} from '../../schemas/Sessions'
import {envCleared} from '../../env'

declare global {
  namespace Express {
    interface Request {
      session?: ISessions
    }
  }

  namespace NodeJS {
    interface ProcessEnv {
      CLIENT_HOST: string,
      SERVER_PORT: number,
      SERVER_SSL_ENABLE: boolean,
      SERVER_SSL_CERT: string,
      SERVER_SSL_KEY: string,

      DATABASE_IP: string,
      DATABASE_PORT: number,
      DATABASE_USER: string,
      DATABASE_PASSWORD: string,
      DATABASE_UNIT: string,

      PAYLOAD_JSON_SIZE: number,
      PAYLOAD_FILE_SIZE: number,
      BCRYPT_COST: number,

      ROUTINES_ENABLE: string,
      ROUTINES_TIMEOUT: number,

      SESSION_TIME: number,
      CODE_CHANGE_PASSWORD_TIMEOUT: number,
      CODE_CHANGE_EMAIL_TIMEOUT: number,

      MAILER_HOST: string,
      MAILER_PORT: number,
      MAILER_ADDRESS: string,
      MAILER_PASSWORD: string,
    }
  }
}