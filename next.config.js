/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['img.youtube.com', 'i.ytimg.com'],
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig 