import expressSlowDown from 'express-slow-down'
import expressRateLimit from 'express-rate-limit'
import dayjs from 'dayjs'

const ratesLimits = {
  onePerMinute: {
    timeout: 60000,
    max: 1
  }
}

const slows = {
  low: {
    timeout: 60000,
    delayAfter: 50,
    delay: 200,
    maxDelay: 10000
  },
  default: {
    timeout: 60000,
    delayAfter: 50,
    delay: 100,
    maxDelay: 10000
  },
  medium: {
    timeout: 60000,
    delayAfter: 25,
    delay: 200,
    maxDelay: 10000
  },
  high: {
    timeout: 60000,
    delayAfter: 10,
    delay: 200,
    maxDelay: 10000
  }
}

export const rateLimit = (type: keyof typeof ratesLimits) => {
  return expressRateLimit({
    windowMs: ratesLimits[type].timeout,
    max: ratesLimits[type].max,
    headers: false,
    handler: (req, res) => {
      const now = dayjs()
      const resetTime = dayjs(req.rateLimit.resetTime)
      const tryAgain = Math.abs(now.diff(resetTime, 'seconds'))
      res.header('Try-again', tryAgain.toString())
      res.sendStatus(429)
    }
  })
}

export const slowDown = (type: keyof typeof slows) => {
  return expressSlowDown({
    windowMs: slows[type].timeout,
    delayAfter: slows[type].delayAfter,
    delayMs: slows[type].delay,
    maxDelayMs: slows[type].maxDelay
  })
}