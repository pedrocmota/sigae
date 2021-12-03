const fs = require('fs')
const fsExtra = require('fs-extra')
const package = require('./package.json')

const envFile = '.build/.env'
const packageFile = '.build/package.json'
const publicFolder = '.build/public'
const certificatesFolder = '.build/server/certificates'

if (!fs.existsSync(envFile)) {
  fs.copyFileSync('.env', envFile)
}

if (!fs.existsSync(packageFile)) {
  package.main = '/server/index.js'
  package.scripts = {
    start: 'NODE_ENV=production node server/index.js'
  }
  delete package.devDependencies
  fs.writeFileSync(packageFile, JSON.stringify(package, null, 2))
}

if (!fs.existsSync(certificatesFolder)) {
  fs.mkdirSync(certificatesFolder)
}

if (!fs.existsSync(publicFolder)) {
  fsExtra.copySync('public', publicFolder)
}