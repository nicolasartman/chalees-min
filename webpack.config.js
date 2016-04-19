const path = require('path');
const webpack = require('webpack');

const jsSourcePath = path.join(__dirname, '/src/js');
const scssSourcePath = path.join(__dirname, '/src/scss');

module.exports = {
  entry: {
    app: path.join(__dirname, 'src/js/index.js')
  },
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
      include: jsSourcePath
    }, {
      test: /\.scss$/,
      loaders: ['style', 'css?sourceMap', 'sass?sourceMap'],
      include: scssSourcePath
    }]
  },
  plugins: [
    // TODO: add in production
    // new webpack.optimize.OccurrenceOrderPlugin(preferEntry),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.min.js', // TODO: add hash in production
      // Despite the name, this can be passed a function that acts as an includeChunk?()
      // predicate. By using this we can always include resources from node_modules
      // in the vendor file and thus version them separately.
      minChunks: function (module, count) {
        return module.resource && module.resource.startsWith(
          path.join(__dirname, 'node_modules'));
        }
      }
    )
  ],
  // this isn't a specific keyword - you can include the strings eval, cheap, module,
  // and source-map in any order. they're basically all just flags that it magically
  // checks for and does stuff based on.
  devtool: 'working cheaper, do it modules, make us source-maps'
  // you could instead 
}