// module.exports = {
//   webpack: config => {
//     // Fixes npm packages that depend on `fs` module
//     config.node = {
//       fs: 'empty'
//     }

//     return config
//   }
// }
// const withSass = require('@zeit/next-sass');
// module.exports = withSass();

const withSass = require('@zeit/next-sass');
const compose = require('next-compose');
const withFonts = require('next-fonts');
const withOffline = require('next-offline');

const sassConfig = {
  /** sass config here */
};
const fontsConfig = {
  /** sass config here */
};

module.exports = compose([
  [
    withOffline,
    {
      generateInDevMode: true
    }
  ],
  [withSass, sassConfig],
  [withFonts, fontsConfig],
  {
    webpack: config => {
      config.node = {
        fs: 'empty'
      };
      return config;
    }
  }
]);
