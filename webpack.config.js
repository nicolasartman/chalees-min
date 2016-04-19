const path = require('path');
const webpack = require('webpack');
const ManifestPlugin = require('webpack-manifest-plugin');
const ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const jsSourcePath = path.join(__dirname, '/src/js');
const scssSourcePath = path.join(__dirname, '/src/scss');

const isProduction = process.env.PRODUCTION;

module.exports = {
  entry: {
    app: path.join(__dirname, 'src/js/index.js')
  },
  output: {
    path: path.join(__dirname, "dist/"),
    publicPath: "/",
    filename: isProduction ? "app.[chunkhash].min.js" : "app.min.js"
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
      loaders: (isProduction ? [] : ['react-hot']).concat('babel-loader'),
      include: jsSourcePath
    }, {
      // TODO: minify styles and create an actual css file instead of this
      // style tag inlining stuff.
      test: /\.scss$/,
      loaders: ['style', 'css?sourceMap', 'sass?sourceMap'],
      include: scssSourcePath
    }]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    // TODO: add in production
    // new webpack.optimize.OccurrenceOrderPlugin(preferEntry),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: isProduction ? 'vendor.[chunkhash].min.js' : 'vendor.min.js',
      // Despite the name, this can be passed a function that acts as an includeChunk?()
      // filter predicate. By using this we can always include resources from node_modules
      // in the vendor file and thus version them separately.
      minChunks: function (module, count) {
        return module.resource && module.resource.startsWith(
          path.join(__dirname, 'node_modules'));
        }
      }
    )
  ]
  .concat(isProduction ? [
    new WebpackMd5Hash(),
    new ManifestPlugin(),
    new ChunkManifestPlugin({
      filename: "webpack-chunk-manifest.json",
      manifestVariable: "webpackManifest"
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        },
        // No idea if this works or silently fails. it's a valid uglifyjs option, but
        // this is webpack, so misconfigurations => silent failure.
        screwIe8: true
    })
  ] : [])
  .concat(new HtmlWebpackPlugin({
    template: './src/html/index.template.html',
    inject: 'body'
  })),
  
  // this isn't a specific keyword - you can include the strings eval, cheap, module,
  // and source-map in any order. they're basically all just flags that it magically
  // checks for and does stuff based on. I chose to space separate them to make it clearer
  // where the keyword boundaries are.
  devtool: isProduction ? 'source-map' : 'cheap module source-map'
}
