const fs = require('fs')
const fsExtra = require('fs-extra')
const package = require('./package.json')

const envFile = '.build/.env'
const packageFile = '.build/package.json'
const publicFolder = '.build/public'
const staticFolder = '.build/server/static'

fs.copyFileSync('.env', envFile)

package.main = '/server/index.js'
package.scripts = {
  start: 'NODE_ENV=production node server/index.js'
}
delete package.devDependencies
fs.writeFileSync(packageFile, JSON.stringify(package, null, 2))

fsExtra.copySync('./server/static', staticFolder, {
  filter: (file) => {
    if (file.endsWith('.ts') || file.endsWith('.gitkeep')) {
      return false
    }
    if (file == 'server\\static\\seeds') {
      return false
    }
    return true
  }
})

fsExtra.copySync('public', publicFolder)