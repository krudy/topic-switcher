var ExtractTextPlugin = require("extract-text-webpack-plugin");

var sassLoaders = [
  'css-loader',
  'autoprefixer-loader?browsers=last 2 version',
  'sass-loader',
];

module.exports = {
  context: __dirname + '/public/pages',
  entry: {
    home: './home.jsx',
  },

  output: {
    filename: '[name].js',
    path: './public/build',
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
    ]
  },

  plugins: [
    new ExtractTextPlugin("[name].css")
  ]
};
