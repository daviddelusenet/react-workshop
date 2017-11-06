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
    port: 3000,
    historyApiFallback: true
  },
  output: {
    path: resolve(__dirname, './dist/js'),
    filename: '[name].min.js',
    publicPath: '/js/'
  },
  resolve: {
    modules: ['node_modules', 'src/app/components']
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
