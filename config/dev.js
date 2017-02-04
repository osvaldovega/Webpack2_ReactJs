const webpackMerge = require('webpack-merge');
const path = require('path');
const commonConfig = require('./base.js');

module.exports = function() {
  return webpackMerge(commonConfig(), {
    output: {
      path: path.join(__dirname, '../dist'),
      filename: '[name].bundle.js',
      publicPath: 'http://localhost:8080',
      sourceMapFilename: '[name].map'
    },
    devtool: 'cheap-module-source-map',
    devServer: {
      historyApiFallback: true,
      stats: 'minimal',
    }
  });
};
