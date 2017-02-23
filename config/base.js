const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = function() {
  return {
    entry: {
			main: ['eventsource-polyfill','webpack-hot-middleware/client?reload=true','./src/js/main.js']
		},
		target: 'web',
    module: {
      loaders: [{
        test: /\.ts?$/,
        loaders: ['awesome-typescript-loader'],
        exclude: [/\.(spec|e2e)\.ts$/]
      }, {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: [/node_modules/],
        query: {
          presets: ['es2015', 'react']
        }
      }, {
        test: /\.css?$/,
        loaders: ['to-string-loader', 'css-loader']
      }, {
        test: /\.scss?$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }, {
          test: /\.(jpg|png|gif)$/,
          loader: 'file-loader?name=assets/[hash].[name]'
      }, {
          test: /\.(woff|woff2|eot|ttf|svg)$/,
          loader: 'url-loader?limit=100000'
      }]
    },
    plugins: [
			new webpack.HotModuleReplacementPlugin(),
			new webpack.NoErrorsPlugin(),
      new webpack.optimize.CommonsChunkPlugin({
          name: ['main'].reverse()
      }),
      new HtmlWebpackPlugin({
          template: 'src/index.html',
          chunksSortMode: 'dependency'
      })
    ]
  };
};
