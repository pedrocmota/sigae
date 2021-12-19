import mongoose from 'mongoose'
import dotenv from 'dotenv'
import path from 'path'
import dedent from 'dedent'

dotenv.config({path: path.resolve(process.cwd(), '.env')})

const conn = mongoose.connect(dedent(
  `mongodb://${process.env.DATABASE_IP}:${process.env.DATABASE_PORT}/${process.env.DATABASE_UNIT}`
), {
  user: process.env.DATABASE_USER,
  pass: process.env.DATABASE_PASSWORD,
  serverSelectionTimeoutMS: 5000
})

export {mongoose, conn}