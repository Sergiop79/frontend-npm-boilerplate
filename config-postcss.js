var postcss = require('postcss');

module.exports = {
  use: [
    'postcss-import',
    'postcss-url',
    'postcss-cssnext',
    'precss',
    'postcss-math',
    'postcss-strip-units',
    'postcss-browser-reporter',
    'postcss-reporter'
  ],
  autoprefixer: {
    browsers: ['last 2 version', '>5%']
  },
  input: 'src/css/style.css',
  output: 'dist/css/style.css'
};
