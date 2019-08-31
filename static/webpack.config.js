const path = require('path');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  watch: true,
  devtool: 'source-map',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development',
  module: {
    rules: [
      {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
             presets: ["@babel/preset-env","@babel/preset-react"]
          }
      }
    ]
  },
  resolve: {
      extensions: [
         '.js'
      ]
  }
}
