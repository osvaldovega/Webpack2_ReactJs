const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = function() {
  return {
    entry: {
      'main': ['./src/js/main.js']
    },
    output: {
      path: path.join(__dirname, '../dist/assets'),
      filename: '[name].bundle.js',
      publicPath: '/',
      sourceMapFilename: '[name].map'
    },
    /*resolve: {
      extensions: ['', '.jsx', '.js', 'css', 'scss'],
      modules: [path.join(__dirname, 'src'), 'node_modules']
    },*/
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
        loaders: ['style', 'css', 'sass']
      }, {
          test: /\.(jpg|png|gif)$/,
          loader: 'file-loader'
      }, {
          test: /\.(woff|woff2|eot|ttf|svg)$/,
          loader: 'url-loader?limit=100000'
      }]
    },
    plugins: [
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
