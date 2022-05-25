const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');
const commonConfig = require('./webpack.common');

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/companies/latest/',  // don't forget trailing '/'
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'companiesMod',
      filename: 'remoteEntry.js',
      exposes: {
        './CompaniesApp': './src/pages/bootstrap',
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
