const webpackMerge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');
const commonConfig = require('./base.js');

module.exports = function() {
  return webpackMerge(commonConfig(), {
    output: {
      path: path.join(__dirname, '../dist'),
      filename: '[name].[hash].bundle.js',
      publicPath: '/',
      sourceMapFilename: '[name].[hash].map'
    },
    devtool: 'eval',
    devServer: {
      contentBase: path.join(__dirname, '../dist'),
      inline: true,
      stats: 'minimal'
    },
    plugins: [
			new webpack.HotModuleReplacementPlugin()
    ]
  });
};
