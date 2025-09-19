/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/k8s-learning-platform' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/k8s-learning-platform' : '',
}

module.exports = nextConfig
