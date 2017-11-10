const webpack = require('webpack');
const { resolve } = require('path');
const context = resolve(__dirname, './src');

module.exports = {
  context,
  entry: {
    app: ['babel-polyfill', './index.js']
  },
  devServer: {
    contentBase: resolve(__dirname, './dist'),
    publicPath: '/js/',
    port: 3000
  },
  output: {
    path: resolve(__dirname, './dist/js'),
    filename: '[name].min.js',
    publicPath: '/js/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};
