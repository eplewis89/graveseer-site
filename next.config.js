/** @type { import('next').NextConfig } */
const nextConfig = {
  reactStrictMode: true,
  images:{
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'graveseerband.com',
        pathname: '**',
      },
      {
        protocol: 'http',
        hostname: 'locahost',
        pathname: '**',
      }
    ],
  }
}

module.exports = nextConfig