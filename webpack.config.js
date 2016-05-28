var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
var path = require('path');

var sassLoaders = [
  'css-loader',
  'autoprefixer-loader?browsers=last 2 version',
  'sass-loader',
];

module.exports = {
  context: __dirname + '/src/client/pages',
  entry: {
    home: './main.jsx',
  },

  output: {
    filename: '[name].js',
    path: './src/client/build',
    publicPath: '/build',
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', sassLoaders.join('!')),
      },
      {
        test: /\.(ttf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader?name=/[name].[ext]',
      },
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
    alias: {
      react: path.resolve('./node_modules/react'), // ReactDom is trying to import its own React file, in this way it will load only one React
    },
  },

  plugins: [
    new ExtractTextPlugin("[name].css"),
    new CommonsChunkPlugin('common.js'),
  ]
};
