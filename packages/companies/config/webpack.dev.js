const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');
const path = require('path');
import { port } from '../src/variables/port';

const devConfig = {
  mode: 'development',
  output: {
    publicPath: `http://localhost:${port}/`,   // don't forget the slash at the end
  },
  devServer: {
    port: port,
    historyApiFallback: {
      index: 'index.html',
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
  ],
};

module.exports = merge(commonConfig, devConfig);
