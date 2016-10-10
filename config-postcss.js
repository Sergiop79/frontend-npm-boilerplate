var postcss = require('postcss');

module.exports = {
  use: [
    'autoprefixer',
    'precss',
    'cssnext'
  ],
  autoprefixer: {
    browsers: ['last 2 version', '>5%']
  },
  input: 'src/css/style.css',
  output: 'dist/css/style.css'
};
