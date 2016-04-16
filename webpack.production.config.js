var path = require('path');
const webpack = require('webpack');

const jsSourcePath = path.join(__dirname, '/src/js');
const scssSourcePath = path.join(__dirname, '/src/scss');

module.exports = {
  entry: [
    path.join(__dirname, 'src/js/index.js')
  ],
  output: {
    path: path.join(__dirname, "public/"),
    publicPath: "/",
    filename: "app.min.js"
  },
  module: {
    noParse: [
      /aws\-sdk/
    ],
    loaders: [{
      test: /node_modules[\\\/]auth0-lock[\\\/].*\.js$/,
      loaders: [
        'transform-loader/cacheable?brfs',
        'transform-loader/cacheable?packageify'
      ],
    }, {
      test: /node_modules[\\\/]auth0-lock[\\\/].*\.ejs$/,
      loader: 'transform-loader/cacheable?ejsify',
    }, {
      test: /\.json$/,
      loader: 'json-loader'
    }, {
      test: /\.jsx?$/,
      loaders: ['react-hot', 'babel-loader'],
      exclude: /node_modules/,
      include: jsSourcePath
    }, {
      test: /\.scss$/,
      loaders: ['style', 'css?sourceMap', 'sass?sourceMap'],
      exclude: /node_modules/,
      include: scssSourcePath
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: false
    }),
    new webpack.optimize.DedupePlugin()
  ],
  devtool: 'source-map'
}