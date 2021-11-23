const withImages = require('next-images')

/**
 * @type {import('next').NextConfig}
 */

module.exports = withImages({
  esModule: true,
  distDir: process.env.npm_lifecycle_event === 'build:next' ? '.build/.next' : '.next'
})