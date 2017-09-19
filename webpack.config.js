const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

  context: path.resolve(__dirname, 'src'),

  entry: {
    app: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:5000',
      './index.jsx',
    ],
    vendor: ['lodash', 'moment'],
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'built'),
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['common', 'vendor'],
      minChunks: 2,
    }),
    new HtmlWebpackPlugin({
      title: 'Main',
      hash: true,
      template: './index.pug',
    }),
    new ExtractTextPlugin({
      filename: 'style.css',
      allChunks: true,
    }),
  ],

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }, {
        test: /\.pug$/,
        loader: 'pug-loader',
      }, {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: '[path][name]__[local]--[hash:base64:5]',
                camelCase: 'dashes',
              },
            }, {
              loader: 'less-loader',
            },
          ],
        }),
      }, {
        test: /\.(ttf|eot|svg|woff|png|jpg|jpeg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]?[hash]',
        },
      },
    ],
  },

  devServer: {
    historyApiFallback: true,
    hot: true,
    port: 5000,
  },

  devtool: 'eval',
  watch: false,
};
