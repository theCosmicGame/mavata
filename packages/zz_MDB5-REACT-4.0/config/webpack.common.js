const WebpackShellPlugin = require('webpack-shell-plugin')
const path = require('path');

module.exports = {
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
        test: /\.tgz$/,
        enforce: 'pre',
        use: 'raw-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(scss)$/,
        use: [
          'style-loader', 
          'css-loader', 
          'sass-loader'
        ]
      },
    ],
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json', '.css', '.tgz'],
    alias: {
      MDBPackage: path.resolve(__dirname, '../mdb-react-ui-kit-4.0.0.tgz'),
    },
  },
};
