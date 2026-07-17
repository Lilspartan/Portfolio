/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  turbopack: {
    rules: {
      '*.svg': { loaders: ['@svgr/webpack'], as: '*.js' },
    },
  },
  webpack(config) {
    const fileLoaderRule = config.module.rules.find(r => r.test?.test?.('.svg'));
    if (fileLoaderRule) fileLoaderRule.exclude = /\.svg$/i;
    config.module.rules.push({ test: /\.svg$/i, use: ['@svgr/webpack'] });
    return config;
  },
};

export default nextConfig;
