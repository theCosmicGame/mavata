const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');
const commonConfig = require('./webpack.common');

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/bootstrapDashboard/latest/',  // don't forget trailing '/'
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'bootstrapDashboardMod',
      filename: 'remoteEntry.js',
      exposes: {
        './BootstrapDashboardApp': './src/bootstrap',
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
