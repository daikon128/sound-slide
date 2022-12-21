/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/api/audio",
        destination: "http://localhost:3001/audio"
      },
      {
        source: "/api/image/:slug*",
        destination: "http://localhost:3003/image/:slug*"
      }
    ]
  }
}

const withTM = require('next-transpile-modules')([
  '@mui/material',
  '@mui/system',
  '@mui/icons-material', // If @mui/icons-material is being used
]);

module.exports = withTM(nextConfig)
