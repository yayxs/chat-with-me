/** @type {import('next').NextConfig} */
const nextConfig = {
  // 启用 App Router
  experimental: {
    appDir: true,
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000',
  },
}

export default nextConfig
