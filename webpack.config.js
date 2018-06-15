var path = require('path');
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
// var express = require('express');
// var app = express();
// app.use(express.static(__dirname+'/public'));

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'build.js',
    chunkFilename: '[name].chunk.js',
    // filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: 'vue-style-loader!style-loader!css-loader'
        // use: [
        //   'vue-style-loader',
        //   'style-loader',
        //   'css-loader'
        // ],
      },      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: resolve('src'),
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      // font-awesome
      {
        test: /\.(eot|svg|ttf|woff|woff2)\w*/,
        loader: 'url-loader?publicPath=/src/static/res/font&outputPath=font/'
      },
      // { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader" },
      // { test: /\.(woff|woff2)$/, loader:"url-loader?prefix=font/&limit=5000" },
      // { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/octet-stream" },
      // { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=image/svg+xml" },

    ],

  },
  plugins:[
    new webpack.ProvidePlugin({
      $:"jquery",
      jQuery:"jquery",
    }),
    // new ExtractTextPlugin("./src/css/bootstrap.css")
    // 为html文件中引入的外部资源如script、link动态添加每次compile后的hash，防止引用缓存的外部文件问题
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: 'head'
    }),
    new ExtractTextPlugin('[name].css'),
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      // '@': resolve('src')
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  performance: {
    hints: false//关闭性能提示
  },
  devtool: '#source-map'//#eval-source-map
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new UglifyJsPlugin({//js压缩
      sourceMap: true,
      // compress: {
      //   warnings: false
      // }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),

  ])
}
