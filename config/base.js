const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = function() {
  return {
    entry: {
			main: ['eventsource-polyfill','./src/js/main.js'],
      vendor: ['react','redux']
		},
		target: 'web',
    resolve: {
      extensions: [".js", ".jsx"]
    },
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
          presets: ['es2015', 'react','stage-2'] // stage-2 is need it to use ...spreadParameters in redux if not fails
        }
      }, {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: [/node_modules/],
        query: {
          presets: ['es2015', 'react','stage-2'] // stage-2 is need it to use ...spreadParameters in redux if not fails
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
      new webpack.optimize.CommonsChunkPlugin({
          name: ['main','vendor']
      }),
      new HtmlWebpackPlugin({
          template: path.join(__dirname, '../src/index.html'), // Load athe template that you need
          inject: 'body',
          has: true,
          chunks: ['main','vendor']
          //chunksSortMode: 'dependency'
      })
    ]
  };
};
