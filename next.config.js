const path = require('path')
const withImages = require('next-images')
// const withSvgr = require('next-svgr')

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
  distDir: process.env.npm_lifecycle_event === 'build:next' ? '.build/.next' : '.next'
})