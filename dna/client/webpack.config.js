var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var path = require('path')

module.exports = {
  'resolve': {
    'extensions': ['', '.webpack.js', '.web.js', '.tag', '.js', '.jsx', '.rtag'],
    'modulesDirectories': ['web_modules', 'node_modules', 'client/common']
  },
  'plugins': [
    new webpack.ProvidePlugin({
      'react': path.join(process.cwd(), 'node_modules/react-dom'),
      'riot': 'riot'
    }),
    new ExtractTextPlugin('[name].css')
  ],
  'module': {
    'preLoaders': [
      { test: /\.rtag$/, exclude: /node_modules/, loader: 'riotjs-loader' }
    ],
    'loaders': [
      {
        test: /\.js$|\.rtag$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          plugins: ['transform-es2015-arrow-functions'],
          presets: ['es2015']
        }
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          plugins: ['transform-es2015-arrow-functions'],
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}
