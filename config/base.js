const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const ENTRY = process.env.NODE_ENV === 'dev '
      ? ['eventsource-polyfill', 'webpack-hot-middleware/client?reload=true', './src/js/main.js']
      : ['eventsource-polyfill', './src/js/main.js'];

module.exports = function () {
  return {
    entry: {
      main: ENTRY
    },
    target: 'web',
    resolve: {
      extensions: [' ', '.js', '.jsx'],
      modules: [path.join(__dirname, 'src'), 'node_modules']
    },
    module: {
      loaders: [{
        test: /\.ts?$/,
        loaders: ['awesome-typescript-loader'],
        exclude: [/\.(spec|e2e)\.ts$/]
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: [/node_modules/],
        query: {
          presets: ['es2015', 'react', 'stage-2'] // stage-2 is need it to use ...spreadParameters in redux if not fails
        }
      },
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: [/node_modules/],
        query: {
          presets: ['es2015', 'react', 'stage-2'] // stage-2 is need it to use ...spreadParameters in redux if not fails
        }
      },
      {
        test: /\.css?$/,
        loaders: ['to-string-loader', 'css-loader']
      },
      {
        test: /\.scss?$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(jpg|png|gif)$/,
        loader: 'file-loader'
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      }]
    },
    plugins: [
      new webpack.NoEmitOnErrorsPlugin(),
      new webpack.optimize.CommonsChunkPlugin({
        name: ['polyfills', 'vendor'],
        minChunks: module =>
          // this assumes your vendor imports exist in the node_modules directory
          module.context && module.context.indexOf('node_modules') !== -1
      }),
      new HtmlWebpackPlugin({
        template: path.join(__dirname, '../src/public/index.html'), // Load athe template that you need
        inject: 'body',
        has: true,
        chunks: ['main', 'vendor'],
        chunksSortMode: 'dependency'
      })
    ]
  };
};
