const { type } = require('os');

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/professional-website",
  output: "export",
  images: { unoptimized: true },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.pdf$/i,
      type: 'asset/resource',
    })
    return config
  },
};

module.exports = nextConfig;
