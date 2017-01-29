const webpackMerge = require('webpack-merge');
const path = require('path');
const commonConfig = require('./base.js');

module.exports = function() {
  return webpackMerge(commonConfig(), {
    devtool: 'cheap-module-source-map',
    devServer: {
      hot: true,
      inline: true,
      port: 8080,
      host: 'localhost',
      historyApiFallback: true,
      noInfo: false,
      stats: 'minimal',
      publicPath: '/',
      clientLogLevel: 'none'
    }
  });
};
