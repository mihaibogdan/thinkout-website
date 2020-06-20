require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const formatter = require('eslint-formatter-pretty');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

const { env } = process;

const options = {
  mode: env.NODE_ENV,
  entry: ['./src/index.js'],
  output: {
    filename: '[name].js',
    publicPath: '/',
    chunkFilename: '[name].js',
    path: path.join(__dirname, '../../public'),
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
  },
  resolve: {
    modules: ['src', 'node_modules'],
    alias: {
      assets: 'assets',
      components: 'components',
    },
  },
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
        options: {
          formatter,
          emitWarning: false, // build doesn't fail on eslint warnings (but does on eslint errors)
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'react-svg-loader',
            options: {
              jsx: true, // true outputs JSX tags
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
      favicon: './src/assets/img/favicon/favicon.ico',
    }),
    new CleanWebpackPlugin(),
  ],
};

module.exports = options;
