var path = require('path');
var webpack = require('webpack');
var themesPath = path.join(__dirname, 'wp/wp-content/themes/di-theme');

module.exports = {
  devtool: 'source-maps',
  entry: [
    path.join(themesPath, 'js/main.js'),
    'webpack-dev-server/client?http://localhost:3001',
    'webpack/hot/dev-server',
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  progress: true,
  module: {
    loaders: [
      { test: /\.json$/, loader: 'json-loader'},
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader', },
    ]
  },
  resolve: {
    modulesDirectories: [
      'src',
      'node_modules'
    ],
    extensions: ['', '.json', '.js']
  }
};
