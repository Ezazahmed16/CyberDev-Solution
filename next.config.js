/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains:['photo.teamrabbil.com']
  }
}

module.exports = nextConfig
