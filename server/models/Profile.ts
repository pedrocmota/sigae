import path from 'path'
import fs from 'fs'

export const getProfile = async (userID: string) => {
  const dir = path.resolve(__dirname, '../database/profile')
  var file = (() => {
    if (fs.existsSync(`${dir}/${userID}.jpg`)) {
      return `${dir}/${userID}.jpg`
    } else {
      return `${dir}/unknown.jpg`
    }
  })()
  return fs.readFileSync(file)
}