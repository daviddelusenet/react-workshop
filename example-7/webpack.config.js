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
  resolve: {
    modules: ['node_modules', 'src/app/components']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: ['style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              importLoaders: 2,
              localIdentName: '[local]___[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: () => {
                return [
                  require('autoprefixer')({
                    browsers: 'last 10 versions'
                  })
                ]
              }
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              includePaths: ['node_modules/foundation-sites/scss', 'src/styles']
            }
          }
        ]
      }
    ]
  }
};
