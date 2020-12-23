/// <reference types="next" />
/// <reference types="next/types/global" />

const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')
module.exports = withPlugins([
  [
    optimizedImages,
    {
      mozjpeg: {
        quality: 80
      },
      pngquant: {
        speed: 3,
        strip: true,
        verbose: true
      },
      imagesPublicPath: '/hello-world/_next/static/images/'
    }
  ],
  {
    basePath: '/hello-world/',
    assetPrefix: '/hello-world/',
    env
  }
])
