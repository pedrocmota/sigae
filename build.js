const fs = require('fs')
const package = require('./package.json')

const envFile = '.build/.env'
const packageFile = '.build/package.json'
const certificatesFolder = '.build/api/certificates'

if (!fs.existsSync(envFile)) {
  fs.copyFileSync('.env', envFile)
}

if (!fs.existsSync(packageFile)) {
  package.main = '/api/index.js'
  package.scripts = {
    start: 'NODE_ENV=production node api/index.js'
  }
  delete package.devDependencies
  fs.writeFileSync(packageFile, JSON.stringify(package, null, 2))
}

if (!fs.existsSync(certificatesFolder)) {
  fs.mkdirSync(certificatesFolder)
}