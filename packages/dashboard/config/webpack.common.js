const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = (env, argv) => {
  return {
    // output: {
    //           path: path.resolve(__dirname, 'dist'),
    //           filename: 'bundle.js',
    //         },

    // mode: argv.mode,

    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.js$/,
          exclude: /(node_modules|bower_components|vendors)/,
          loader: 'eslint-loader',
          options: {
            fix: true,
          },
        },
        // {
        //   test: /\.js$/,
        //   exclude: /(node_modules|bower_components|vendors)/,
        //   loader: 'babel-loader',
        //   options: {
        //     cacheDirectory: true,
        //   },
        // },
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react', '@babel/preset-env'],
              plugins: ['@babel/plugin-transform-runtime'],
              cacheDirectory: true,
            },
          },
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.less$/,
          loaders: ["style-loader", "css-loader", "less-loader"]
        },
        // {
        //   test: /\.s[ac]ss$/i,
        //   exclude: /node_modules/,
        //   use: [
        //     // Creates `style` nodes from JS strings
        //     "style-loader",
        //     // Translates CSS into CommonJS
        //     "css-loader!postcss-loader",
        //     // Compiles Sass to CSS
        //     "sass-loader",
        //   ],
        // },
        {
          test: /\.(css|sass|scss)$/,
          use: [
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader'
            },
            {
              loader: 'sass-loader'
            }
          ]
        },
        
        // {
        //   // Load all images as base64 encoding if they are smaller than 8192 bytes
        //   test: /\.(png|jpg|jpeg|gif|ico)$/,
        //   use: [
        //     {
        //       // loader: 'url-loader',
        //       loader: 'url-loader',
        //       options: {
        //         // On development we want to see where the file is coming from, hence we preserve the [path]
        //         name: '[path][name].[ext]?hash=[hash:20]',
        //         limit: 8192
        //       },
        //     },
        //     {
        //       loader: "resolve-url-loader",
        //       options: {
        //         sourceMap: true,
        //         join: (uri, base) => path.join('', base, uri)
        //       }
        //     },
        //   ],
        // },
        // {
        //   test: /\.(png|jpe?g|gif|ico)$/i,
        //   loader: 'file-loader',
        //   options: {
        //     name(resourcePath, resourceQuery) {
        //       // `resourcePath` - `/absolute/path/to/file.js`
        //       // `resourceQuery` - `?foo=bar`
  
        //       if (process.env.NODE_ENV === 'development') {
        //         return '[path][name].[ext]';
        //       }
  
        //       return '[contenthash].[ext]';
        //     },
        //   },
        // },
        {
          test: /\.(png|jpg|jpeg|gif|ico|svg|webp)$/,
          loader: 'file-loader'
        },
        {
          test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'file-loader',
              options: {
                //name: '[path][name].[ext]',
                name: '[name].[ext]',
                outputPath: 'fonts/'
              }
            }
          ]
        },
        //  end BEM ADDED
        {
          test: /\.html$/,
          loader: 'html-loader',
          options: {
            minimize: true,
            removeComments: true,
            collapseWhitespace: true,
          },
        },
        {
          test: /\.(sa|sc)ss$/,
          use: [argv.mode !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        },
        {
          test: /\.(jpe?g|png|gif)$/,
          loader: 'file-loader',
          options: {
            outputPath: 'assets/images/',
          },
        },
        {
          test: /\.(eot|svg|ttf|woff2?|otf)$/,
          loader: 'file-loader',
          options: {
            outputPath: 'assets/fonts/',
          },
        },
      ],
    },

    plugins: [
      new HtmlWebPackPlugin({
        template: './public/index.html',
        filename: 'index.html',
      }),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.$': 'jquery',
        'window.jQuery': 'jquery',
        Waves: 'node-waves',
        _: 'underscore',
        Promise: 'es6-promise',
      }),
      new MiniCssExtractPlugin({
        filename: argv.mode !== 'production' ? '[name].css' : '[name].[hash].css',
        chunkFilename: argv.mode !== 'production' ? '[id].css' : '[id].[hash].css',
        cssProcessorOptions: {
          safe: true,
          discardComments: {
            removeAll: true,
          },
        },
      }),
      new CopyWebpackPlugin([
        {
          from: '**/*',
          to: 'mdb-addons',
          context: path.resolve(__dirname, 'src', 'vendors', 'mdb', 'mdb-addons'),
        },
      ]),
      new CleanWebpackPlugin('dist', { verbose: true }),
    ],
    
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
      minimizer: [
        new TerserPlugin({
          parallel: true,
          sourceMap: true,
          terserOptions: {
            output: {
              comments: false,
            },
          },
        }),
        new CssMinimizerPlugin({}),
      ],
    },

    performance: {
      hints: false,
    },
  };
};