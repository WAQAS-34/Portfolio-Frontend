/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "imgix",
    path: "https://noop/",
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  // SEO optimizations
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  // Enable static optimization
  trailingSlash: false,
  // Custom headers for SEO
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
