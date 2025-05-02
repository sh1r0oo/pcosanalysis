/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  webpack: (config, { isServer, dev }) => {
    // Advanced optimization for production
    if (!dev) {
      // Tree shaking and code splitting
      config.optimization.minimize = true;
      config.optimization.splitChunks = {
        chunks: 'all',
        maxInitialRequests: 5,
        maxAsyncRequests: 5,
        minSize: 20000,
        cacheGroups: {
          framework: {
            test: /[\/]node_modules[\/](react|react-dom|next)[\/]/,
            name: 'framework',
            priority: 40,
            enforce: true,
          },
          vendors: {
            test: /[\/]node_modules[\/]/,
            priority: 30,
            name: 'vendors',
          },
          commons: {
            name: 'commons',
            minChunks: 2,
            priority: 20,
          },
        },
      };

      // Aggressive code optimization
      config.optimization.minimizer.push(
        new (require('terser-webpack-plugin'))({
          terserOptions: {
            compress: {
              drop_console: true,
              dead_code: true,
              passes: 2,
            },
            mangle: true,
          },
        })
      );
    }

    // Efficient caching
    config.cache = {
      type: 'filesystem',
      maxMemoryGenerations: 3,
      buildDependencies: {
        config: [__filename],
      },
    };

    // Performance hints
    config.performance = {
      hints: dev ? false : 'warning',
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
    };

    return config;
  },
  compress: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  experimental: {
    optimizePackageImports: ['@/components', 'recharts', 'framer-motion'],
    serverActions: true,
    optimisticClientCache: true,
  },
};

module.exports = nextConfig;