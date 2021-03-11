const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
  entry: './src/index.jsx',
  mode: 'development',
  target: 'web',
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/i,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: { importLoaders: 1 } },
          { loader: 'postcss-loader' },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/public/index.html',
      hash: true,
      filename: 'index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  output: {
    filename: '[name].[chunkhash].js',
  },
  devtool: 'source-map',
  devServer: {
    port: 3000,
    open: true,
    hot: true,
  },
};

module.exports = config;
