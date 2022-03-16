import {SessionsModel} from '../schemas/Sessions'
import daysjs from 'dayjs'

export const initRoutines = () => {
  timer()
  routines()
}

const timer = () => {
  setTimeout(() => {
    routines()
    timer()
  }, process.env.ROUTINES_TIMEOUT * 1000)
}

const routines = async () => {
  await SessionsModel.deleteMany({
    createAt: {$lt: daysjs().subtract(process.env.SESSION_TIME, 'second').unix()}
  })
}