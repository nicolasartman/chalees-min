const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    autoprefixer({
      browsers: [
        '>5%',
        'last 10 Chrome versions',
        'last 10 Chrome versions',
        'last 5 iOS versions',
      ]
    })
  ]
};
