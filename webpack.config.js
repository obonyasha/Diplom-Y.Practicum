const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';
const webpack = require('webpack');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminGifsicle = require('imagemin-gifsicle');
const ImageminJpegtran = require('imagemin-jpegtran');
const ImageminOptipng = require('imagemin-optipng');
const ImageminSvgo = require('imagemin-svgo');

module.exports = {
  entry: {
    main: './src/index.js',
    about: './src/about/index.js',
    analytics: './src/analytics/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]/[name].[chunkhash].js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: { loader: "babel-loader" },
      exclude: /node_modules/
    },
    {
      test: /\.css$/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: '../',
          },
        },
        'css-loader',
        'postcss-loader']
    },
    {
      test: /\.(png|jpg|gif|ico|svg)$/,
      use: [
        'file-loader?name=./images/[name].[ext]',
        {
          loader: 'image-webpack-loader',
          options: {
            bypassOnDebug: true,
            disable: true,
          }
        },
      ]
    },
    {
      test: /\.(eot|ttf|woff|woff2)$/,
      loader: 'file-loader?name=./vendor/[name].[ext]'
    }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: '[name]/style.[contenthash].css' }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: ['default'],
      },
      canPrint: true
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      inject: false
    }),
    new HtmlWebpackPlugin({
      template: './src/about/index.html',
      filename: 'about.html',
      inject: false
    }),
    new HtmlWebpackPlugin({
      template: './src/analytics/index.html',
      filename: 'analytics.html',
      inject: false
    }),
    new WebpackMd5Hash(),
    new webpack.DefinePlugin({
      'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new CopyWebpackPlugin([{
      from: './src/images/',
      to: './images/'
    }]),
    new ImageminPlugin({
      bail: false,
      imageminOptions: {
        plugins: [
          ImageminGifsicle({
            interlaced: true
          }),
          ImageminJpegtran({
            progressive: true
          }),
          ImageminOptipng({
            optimizationLevel: 5
          }),
          ImageminSvgo({
            removeViewBox: true
          })
        ]
      }
    }),
  ],
  devtool: 'source-map'
};
