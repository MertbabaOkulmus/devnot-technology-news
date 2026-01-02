/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.devnot.com',
        port: '',
        pathname: '/uploads/**',
      },
    ],
    unoptimized: true
  },
}

module.exports = nextConfig