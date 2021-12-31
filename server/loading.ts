import fs from 'fs'
import path from 'path'
import nodemailer from 'nodemailer'
import inline from 'nodemailer-plugin-inline-base64'

export const loadCertificates = () => {
  try {
    const cert = fs.readFileSync(
      path.join(process.cwd(), `/server/static/ssl/${process.env.SERVER_SSL_CERT}`), 'utf-8'
    )
    const key = fs.readFileSync(
      path.join(process.cwd(), `/server/static/ssl/${process.env.SERVER_SSL_KEY}`), 'utf-8'
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
    host: process.env.MAILER_HOST,
    port: process.env.MAILER_PORT,
    secure: true,
    auth: {
      user: process.env.MAILER_ADDRESS,
      pass: process.env.MAILER_PASSWORD
    }
  })
  mailer.use('compile', inline({cidPrefix: 'somePrefix_'}))
  return mailer
}