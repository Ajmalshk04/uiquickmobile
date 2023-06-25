/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  optimizeFonts: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.webp$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: '[name].[hash].[ext]',
            outputPath: 'static/images/',
            publicPath: '/_next/static/images/',
            esModule: false,
          },
        },
      ],
    });

    return config;
  },
}

module.exports = nextConfig

