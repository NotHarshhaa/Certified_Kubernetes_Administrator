/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Remove basePath and assetPrefix if deploying to root domain
  // basePath: process.env.NODE_ENV === 'production' ? '/k8s-learning-platform' : '',
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/k8s-learning-platform' : '',
}

module.exports = nextConfig
