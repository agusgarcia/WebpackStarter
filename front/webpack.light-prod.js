// webpack v4
const path = require('path');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {main: './src/index.js'},
  output: {
    path: path.resolve(__dirname, './../'),
    filename: './js/[name].js',
    publicPath: './'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules\/(?!(swiper|dom7)\/).*/],
        use: {
          loader: 'babel-loader'
        }
      },

      {
        test: /\.scss$/,
        use: ['style-loader', MiniCssExtractPlugin.loader, {
          loader: 'css-loader',
          options: {
            url: false
          }
        }, 'postcss-loader', 'sass-loader']
        /** includePaths: [
         path.resolve(__dirname, '../src/app/assets/sass'),
         path.resolve(__dirname, '../node_modules/bootstrap/scss'),
         ] **/
      },
      /* {
         test: /\.(png|jpg|gif)$/,
         use: [
           {
             loader: 'file-loader',
             options: {
               name: '[path][name].[ext]',
               // Get files from src/assets that matches the loader
               // and put them in the images folder at the root of the projet
               context: path.resolve(__dirname, 'src/assets/'),
               outputPath: './',
               publicPath: './',
               useRelativePaths: false
             }
           }
         ]
       }, */ /* {
        test: /\.html$/,
        loader: 'html-loader'
      }, */
      /* {
        test: /\.(woff(2)?|ttf|eot)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
            context: path.resolve(__dirname, 'src/assets/'),
            outputPath: './',
            publicPath: './',
          }
        }]
      }, */
      {
        test: /\.svg$/,
        loader: 'svg-url-loader',
        options: {
          name: '[name].[ext]',
          limit: 1,
          noquotes: true,
          outputPath: 'images/'
        }
      },
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader'
      }
    ],

  },
  stats: {
    // Nice colored output
    colors: true
  },
  plugins: [
    new CleanWebpackPlugin('dist', {}),

    new MiniCssExtractPlugin({
      filename: './css/style.css'
    }),
    new WebpackMd5Hash()
  ],
};
