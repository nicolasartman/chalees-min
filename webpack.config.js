const path = require('path');
const webpack = require('webpack');
const ManifestPlugin = require('webpack-manifest-plugin');
const ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

const jsSourcePath = path.join(__dirname, '/src/js');
const scssSourcePath = path.join(__dirname, '/src/scss');

const isProduction = process.env.PRODUCTION;

// Notes:
// 
// Do not change the length of the hashes without updating firebase.json
// or it'll break the cache configuration.

module.exports = {
  entry: {
    app: path.join(__dirname, 'src/js/index.js')
  },
  output: {
    path: path.join(__dirname, "dist/"),
    publicPath: "/",
    filename: isProduction ? "app.hash-[chunkhash:12].min.js" : "app.min.js"
  },
  module: {
    noParse: [
      /aws\-sdk/
    ],
    loaders: [{
      test: /\.json$/,
      loader: 'json-loader'
    }, {
      test: /\.jsx?$/,
      loaders: (isProduction ? [] : ['react-hot']).concat('babel-loader'),
      include: jsSourcePath
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract(
        'style', 
        (isProduction ? 'css?minimize' : 'css?sourceMap') + '!postcss!sass?sourceMap'),
      include: scssSourcePath
    }, {
      test: /\.(png|jpg|gif|svg)$/,
      loader: 'url-loader',
      query: {
        name: '[name].hash-[hash:12].[ext]',
        limit: 8192
      }
    }]
  },
  postcss: function () {
    return {
      defaults: [autoprefixer],
      cleaner:  [autoprefixer({ browsers: ['last 2 versions'] })]
    };
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    // TODO: add in production
    // new webpack.optimize.OccurrenceOrderPlugin(preferEntry),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: isProduction ? 'vendor.hash-[chunkhash:12].min.js' : 'vendor.min.js',
      // Despite the name, this can be passed a function that acts as an includeChunk?()
      // filter predicate. By using this we can always include resources from node_modules
      // in the vendor file and thus version them separately.
      minChunks: function (module, count) {
        return module.resource && module.resource.startsWith(
          path.join(__dirname, 'node_modules'));
        }
      }
    ),
    new ExtractTextPlugin(isProduction ? "site.min.hash-[chunkhash:12].css" : "site.min.css", {
      allChunks: true
    }),
    new webpack.ProvidePlugin({
        React: "react"
    }),
  ]
  .concat(isProduction ? [
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),
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
    favicon: './src/images/favicons/favicon.ico',
    inject: 'body'
  })),
  
  // this isn't a specific keyword - you can include the strings eval, cheap, module,
  // and source-map in any order. they're basically all just flags that it magically
  // checks for and does stuff based on. I chose to space separate them to make it clearer
  // where the keyword boundaries are.
  devtool: isProduction ? 'source-map' : 'cheap module source-map'
}
