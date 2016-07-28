var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  'resolve': {
    'extensions': ['', '.webpack.js', '.web.js', '.tag', '.js', '.jsx', '.rtag'],
    'modulesDirectories': ['web_modules', 'node_modules', 'client/common']
  },
  'plugins': [
    new webpack.ProvidePlugin({
      'react': 'react-dom',
      'riot': 'riot',
      'oval': 'organic-oval'
    }),
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
