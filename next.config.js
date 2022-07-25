/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
  },
  basePath: "/iokloud.github.io",
  assetPrefix: "/iokloud.github.io"
}

module.exports = nextConfig
