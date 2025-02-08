const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, 'assets/js/main.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    assetModuleFilename: 'assets/img/[name][ext]'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new Dotenv(),
    new webpack.DefinePlugin({
      'process.env.EMAILJS_SERVICE_ID': JSON.stringify(process.env.EMAILJS_SERVICE_ID || 'service_o7bitcp'),
      'process.env.EMAILJS_TEMPLATE_ID_1': JSON.stringify(process.env.EMAILJS_TEMPLATE_ID_1 || 'template_tk0dd8b'),
      'process.env.EMAILJS_TEMPLATE_ID_2': JSON.stringify(process.env.EMAILJS_TEMPLATE_ID_2 || 'template_8z15503'),
      'process.env.EMAILJS_PUBLIC_KEY': JSON.stringify(process.env.EMAILJS_PUBLIC_KEY || '_1x8c2wIGn-ACFKW2')
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
      inject: 'body',
      scriptLoading: 'defer'
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css'
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'assets/img', to: 'assets/img' },
        { from: 'assets/css', to: 'assets/css' },
        { from: 'node_modules/swiper/swiper-bundle.min.css', to: 'assets/css/swiper-bundle.min.css' }
      ]
    }),
    new webpack.ProvidePlugin({
      ScrollReveal: ['scrollreveal', 'default'],
      Swiper: ['swiper', 'default']
    })
  ],
  resolve: {
    alias: {
      'scrollreveal': 'scrollreveal',
      'swiper': 'swiper'
    }
  },
  optimization: {
    minimize: true
  }
};