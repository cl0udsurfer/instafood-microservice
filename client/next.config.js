const { withPlugins } = require('next-compose-plugins');
const withOptimizedImages = require('next-optimized-images');

// next.js configuration
const nextConfig = {
  webpack: (config) => {
    config.resolve.modules.push(__dirname);

    config.resolve.alias = {
      ...config.resolve.alias,
    };
    return config;
  },
};

module.exports = withPlugins([withOptimizedImages], nextConfig);
