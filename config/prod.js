const webpackMerge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');
const commonConfig = require('./base.js');

module.exports = function() {
  return webpackMerge(commonConfig(), {
    output: {
      path: path.join(__dirname, '../dist'),
      filename: '[name].bundle.js',
      publicPath: '/'
    },
    plugins: [
      new webpack.LoaderOptionsPlugin({
  			minimize: true,
        debug: false
  		}),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('prod'),
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        beautify: false,
        mangle: {
          screw_ie8: true,
          keep_fnames: true
        },
        compress: {
          screw_ie8: true
        },
        comments: false
      })
    ]
  });
};
