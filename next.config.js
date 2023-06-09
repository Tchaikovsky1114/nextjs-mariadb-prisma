/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['kmsstorage.s3.ap-northeast-2.amazonaws.com'],
  }
  
}

module.exports = nextConfig

const withVideos = require("next-videos");

module.exports = withVideos();