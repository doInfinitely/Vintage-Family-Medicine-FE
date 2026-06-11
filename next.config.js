/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ];
  },
  async redirects() {
    return [
      { source: '/resources', destination: '/patient-resources', permanent: true },
      { source: '/scheduling', destination: '/', permanent: true },
      { source: '/billing', destination: '/patient-resources', permanent: true },
      { source: '/patient-portal', destination: '/patient-resources', permanent: true },
    ];
  },
}

module.exports = nextConfig
