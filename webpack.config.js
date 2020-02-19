const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  entry: path.join(__dirname, 'src', 'index.js'),
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'js/bundle.min.js'
  }
};
