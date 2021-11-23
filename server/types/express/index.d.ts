import express from 'express'
import {ISessions} from '../../schemas/Sessions'

declare global {
  namespace Express {
    interface Request {
      session?: ISessions
    }
  }
}