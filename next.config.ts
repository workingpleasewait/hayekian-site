import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    // appDir is default in Next 13+; keep minimal experimental flags
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.hayekian.io' }],
        destination: 'https://hayekian.io/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
