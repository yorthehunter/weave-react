var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react']
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader?precision=10'
        ]
      },
      {
        test: /\.(ttf|eot|woff|woff2|svg)$/,
        use: 'file-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
