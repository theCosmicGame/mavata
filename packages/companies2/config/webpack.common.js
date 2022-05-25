var webpack = require('webpack');

module.exports = {
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
  plugins: [
    new webpack.ProvidePlugin({
      // Make a global `process` variable that points to the `process` package,
      // because the `util` package expects there to be a global variable named `process`.
          // Thanks to https://stackoverflow.com/a/65018686/14239942
      process: 'process/browser'
    }),
  ],
  // resolve: {
  //   extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.css', '.scss'],
  //   modules: ['src', 'node_modules'] // Assuming that your files are inside the src dir
  // },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    fallback: {
      'util': require.resolve('util/')
    },
  },
};
