import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    // appDir is default in Next 13+; keep minimal experimental flags
  },
};

export default nextConfig;