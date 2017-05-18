const path = require('path')

const isDev = process.env.NODE_ENV !== 'production'

module.exports = {
  entry: './browser-test/main.js',
  output: {
    filename: './dist/dist.js',
  },
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'browser-test'),
  }
}