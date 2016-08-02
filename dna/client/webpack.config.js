var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var path = require('path')

module.exports = {
  'resolve': {
    'extensions': ['', '.webpack.js', '.web.js', '.tag', '.js', '.jsx', '.rtag', '.vue', '.html'],
    'modulesDirectories': ['web_modules', 'node_modules', 'client/common']
  },
  'plugins': [
    new ExtractTextPlugin('[name].css')
  ],
  'module': {
    'preLoaders': [
      { test: /\.rtag$/, exclude: /node_modules/, loader: 'riotjs-loader' },
      {
        test: /\.tag$/,
        exclude: /node_modules/,
        loaders: [
          'organic-oval/webpack/oval-loader',
          'organic-oval/webpack/oval-control-statements-loader'
        ]
      }
    ],
    'loaders': [
      {
        test: /\.vue$/, // a regex for matching all files that end in `.vue`
        loader: 'vue'   // loader to use for matched files
      },
      { test: /\.html$/, loader: 'ractive-component' },
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
      },
      {
        test: /\.js$|\.tag$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          plugins: [
            'transform-es2015-arrow-functions',
            ['transform-react-jsx', { pragma: 'createElement' }]
          ],
          presets: ['es2015']
        }
      }
    ]
  }
}
