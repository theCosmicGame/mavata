const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('./package.json');

module.exports = {
  mode: 'development',
  devServer: {
    port: 8086,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'companies',
      filename: 'remoteEntry.js',
      exposes: {
        './CompaniesIndex': './src/pages/bootstrap',
      },
      shared: packageJson.dependencies, 
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  entry: './src/pages/index2.js',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.css', '.scss'],
    modules: ['src', 'node_modules'] // Assuming that your files are inside the src dir
  },
};
