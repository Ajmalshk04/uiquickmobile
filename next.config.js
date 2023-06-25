// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
//   optimizeFonts: true,
//   webpack(config) {
//     config.module.rules.push({
//       test: /\.webp$/,
//       use: [
//         {
//           loader: 'url-loader',
//           options: {
//             limit: 8192,
//             name: '[name].[hash].[ext]',
//             outputPath: 'static/images/',
//             publicPath: '/_next/static/images/',
//             esModule: false,
//           },
//         },
//       ],
//     });

//     return config;
//   },
// }

// module.exports = nextConfig

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg|webp)$/i,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 8192, // Adjust the limit as needed
            name: '[name].[hash].[ext]',
            outputPath: 'static/images/', // Output path for processed images
            publicPath: '/_next/static/images/', // Public path for images
            esModule: false,
          },
        },
      ],
    });

    return config;
  },
};
