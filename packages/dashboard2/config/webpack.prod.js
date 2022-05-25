const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');
const commonConfig = require('./webpack.common');

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/user/latest/',  // don't forget trailing '/'
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'dashboard2Mod',
      filename: 'remoteEntry.js',
      exposes: {
        './Dashboard2App': './src/bootstrap',
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
