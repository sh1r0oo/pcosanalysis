/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  webpack: (config, { isServer, webpack }) => {
    // Disable webpack cache to resolve caching errors
    config.cache = false;
    return config;
  },
};

module.exports = nextConfig;