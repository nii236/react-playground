var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var merge = require('webpack-merge');
var webpack = require('webpack');
var Clean = require('clean-webpack-plugin');
var CompressionPlugin = require('compression-webpack-plugin');
var TARGET = process.env.TARGET;
var ROOT_PATH = path.resolve(__dirname);
var common = {
  entry: [path.resolve(ROOT_PATH, 'app/main')],
  resolve: {
    extensions: [
      '',
      '.js',
      '.jsx'
    ],
    root: [ path.resolve(__dirname)]
  },
  output: {
    path: path.resolve(ROOT_PATH, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
    ]
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: 'React App',
      template: 'app/utils/HTMLWebpackTemplate.html',
      inject: 'body'
    })
  ]
};

if (TARGET==='build') {
  module.exports = merge(common, {
    devtool: 'source-map',
    plugins: [
      new Clean(['build']),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.DedupePlugin(),
      new CompressionPlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
    ],
    module: {
      loaders: [
        {
          test: /\.(js|jsx)$/,
          loader: 'babel',
          include: path.resolve(ROOT_PATH, 'app')
        }
      ]
    }
  });
}

if (TARGET==='dev') {
  module.exports = merge(common, {
    devtool: 'source-map',
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('development')
        }
      })
    ],
    entry: [
      'webpack/hot/dev-server'
    ],
    module: {
      loaders: [
        {
          test: /\.(js|jsx)$/,
          loader: 'react-hot',
          include: path.resolve(ROOT_PATH, 'app')
        }
      ],
      preLoaders: [
        {
          test: /\.(js|jsx)$/,
          loader: 'babel',
          include: path.resolve(ROOT_PATH, 'app')
        }
      ]
    }
  });
}
