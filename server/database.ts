import mongoose from 'mongoose'

const conn = mongoose.connect(
  `mongodb://${process.env.DATABASE_IP}:${process.env.DATABASE_PORT}/${process.env.DATABASE_UNIT}`
  , {
    user: process.env.DATABASE_USER,
    pass: process.env.DATABASE_PASSWORD,
    serverSelectionTimeoutMS: 5000
  })

export {mongoose, conn}