const withPlugins = require('next-compose-plugins');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const withOffline = require('next-offline');
const withFonts = require('next-fonts');

const nextConfig = {
  // target: 'serverless',
  webpack: (config, options) => {
    // modify the `config` here
    config.node = {
      fs: 'empty'
    };

    config.plugins.push(
      new SWPrecacheWebpackPlugin({
        verbose: true,
        staticFileGlobsIgnorePatterns: [/\.next\//],
        runtimeCaching: [
          {
            handler: 'networkFirst',
            urlPattern: /^https?.*/
          }
        ]
      })
    );
    return config;
  }
};

module.exports = withPlugins(
  [
    [withFonts],
    [
      withOffline,
      {
        generateinDevMode: true
      }
    ]
  ],
  nextConfig
);
