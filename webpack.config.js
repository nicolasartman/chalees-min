const autoprefixer = require("autoprefixer");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const path = require("path");

const paths = {
  dist: path.resolve("./dist"),
  template: path.resolve("./src/index.html"),
  favicon: path.resolve("./src/favicon.ico"),
  scripts: path.resolve("./scripts"),
  elmMake: path.resolve(__dirname, "node_modules/elm/binwrappers/elm-make")
};

const isProduction = process.env.NODE_ENV === "production";
const isDevelopment = !isProduction;

let config = {
  entry: [path.resolve("./src/index.js")],
  output: {
    pathinfo: true,
    path: paths.dist,
    publicPath: "/"
  },
  resolve: {
    extensions: [".js", ".elm"]
  },
  module: {
    noParse: /\.elm$/,
    rules: []
  },
  plugins: []
};

// Meta
// ----
if (isProduction) {
  config.bail = true;
}

// Output
// ------

if (isDevelopment) {
  config.output.filename = "bundle.js";
} else {
  config.output.filename = "[name].[chunkhash:8].js";
}

// Entry
// -----

if (isDevelopment) {
  config.entry.unshift("react-dev-utils/webpackHotDevClient", "webpack/hot/dev-server");
}

// Loaders
// -------

// Elm

if (isDevelopment) {
  config.module.rules.push({
    test: /\.elm$/,
    exclude: [/elm-stuff/, /node_modules/],
    loaders: [
      "elm-hot-loader",
      {
        loader: "elm-webpack-loader",
        options: {
          verbose: true,
          warn: true,
          debug: true,
          pathToMake: paths.elmMake,
          forceWatch: true,
          cwd: __dirname
        }
      }
    ]
  });
} else {
  config.module.rules.push({
    test: /\.elm$/,
    exclude: [/elm-stuff/, /node_modules/],
    loaders: [
      {
        loader: "elm-webpack-loader",
        options: { pathToMake: paths.elmMake }
      }
    ]
  });
}

// CSS & SCSS
if (isDevelopment) {
  const cssLoaders = ["style-loader", "css-loader", "postcss-loader"];

  config.module.rules.push(
    {
      test: /\.scss$/,
      loaders: cssLoaders.concat("sass-loader")
    },
    {
      test: /\.css$/,
      loaders: cssLoaders
    }
  );
} else {
  const cssLoaders = [
    {
      loader: "css-loader",
      options: {
        autoprefixer: false
      }
    },
    "postcss-loader"
  ];

  config.module.rules.push(
    {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract({
        use: cssLoaders.concat("sass-loader")
      })
    },
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract({
        use: cssLoaders
      })
    }
  );
}

if (isDevelopment) {
  config.plugins.push(
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.template,
      favicon: paths.favicon
    }),
    new webpack.HotModuleReplacementPlugin()
  );
} else {
  config.plugins.push(
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.template,
      favicon: paths.favicon,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true
      }
    }),
    new ExtractTextPlugin("[name].[contenthash:8].css")
  );
}

// DevTool
// -------

if (isDevelopment) {
  config.devtool = "cheap-module-eval-source-map";
}

module.exports = config;
