const path = require('path')

const isDev = process.env.NODE_ENV !== 'production'

module.exports = {
  entry: './example/main.js',
  output: {
    filename: './dist/dist.js',
  },
  devtool: 'cheap-module-source-map',
  resolve: {
    modules: [
      './src',
      'node_modules'
    ]
  },
  target: 'web',
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
    contentBase: path.join(__dirname, 'example'),
    host: '0.0.0.0'
  }
}