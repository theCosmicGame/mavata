const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');
const path = require('path');

const devConfig = {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  entry: './src/index.js',
  output: {
    publicPath: 'http://localhost:8085/',   // don't forget the slash at the end
  },
  devServer: {
    port: 8085,
    historyApiFallback: {
      index: 'index.html',
    },
  },
  resolve: {
      fallback: {
        fs: false,
      },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'companiesMod',
      filename: 'remoteEntry.js',
      exposes: {
        './CompaniesApp': './src/bootstrap',
      },
      shared: packageJson.dependencies,
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new HtmlWebpackPlugin({
      template: './public/pages/landing.html',
      inject: true,
      chunks: ['index'],
      filename: 'landing.html'
    }),
    new HtmlWebpackPlugin({
      template: './public/pages/faq.html',
      inject: true,
      chunks: ['index'],
      filename: 'faq.html'
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
