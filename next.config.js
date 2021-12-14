const path = require('path')
const withImages = require('next-images')
const Package = require('./package.json')

/**
 * @type {import('next').NextConfig}
 */

module.exports = withImages({
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      include: [
        path.resolve(__dirname, 'public/assets/')
      ],
      use: ['@svgr/webpack']
    })
    return config
  },
  esModule: true,
  exclude: path.resolve(__dirname, 'public/assets/'),

  inlineImageLimit: 18384,

  distDir: process.env.npm_lifecycle_event === 'build:next' ? '.build/.next' : '.next',
  publicRuntimeConfig: {
    version: Package.version,
    repository: Package.repository.url
  }
})