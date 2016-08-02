var webpack = require('webpack')
var path = require('path')

module.exports = {
  'resolve': {
    'extensions': ['', '.webpack.js', '.web.js', '.tag', '.js', '.jsx', '.rtag', '.vue', '.html'],
    'modulesDirectories': ['web_modules', 'node_modules', 'client/common'],
    'alias': {
      'ember': path.join(process.cwd(), './client/apps/ember/inject'),
      'app': path.join(process.cwd(), './client/apps/ember')
    }
  },
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
      },
      {
        test: /\.hbs$/,
        include: /client\/apps\/ember\/templates/,
        loader: 'ember-webpack-loaders/htmlbars-loader',
        query: {
          appPath: './client/apps/ember'
        }
      },
      {
        test: /client\/apps\/\/ember\/main\.js/,
        loader: 'ember-webpack-loaders/inject-templates-loader!ember-webpack-loaders/inject-modules-loader',
        query: {
          appPath: './client/apps/ember'
        }
      }
    ]
  },
  node: {
    fs: 'empty'
  }
}
