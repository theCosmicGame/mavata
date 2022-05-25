const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
        {
            // Load all images as base64 encoding if they are smaller than 8192 bytes
            test: /\.(png|jpg|gif)$/,
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        // On development we want to see where the file is coming from, hence we preserve the [path]
                        name: '[path][name].[ext]?hash=[hash:20]',
                        limit: 8192
                    }
                }
            ]
        },
        {
            // Load all icons
            test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
            use: [
                {
                    loader: 'file-loader',
                }
            ]
        },
        {
            test: /\.(ttf|eot|woff|woff2)$/,
            loader: 'file-loader',
            options: {
                name: 'fonts/[name].[ext]',
            },
        },
    ],
    },

    plugins: [
        new MiniCssExtractPlugin(),
    ],
};
