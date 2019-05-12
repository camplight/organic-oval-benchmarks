const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const localModules = ['web_modules', 'node_modules', 'client/common'].map((v) => {
  return path.join(__dirname, v)
})

module.exports = {
  'entry': {
    'index': './index.js'
  },
  'mode': 'development',
  'resolve': {
    'extensions': ['.webpack.js', '.web.js', '.js', '.tag'],
    'modules': localModules.concat(['node_modules'])
  },
  'plugins': [
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
  ],
  'module': {
    'rules': [
      {
        test: /\.tag$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [ require.resolve('@babel/plugin-transform-react-jsx') ]
          }
        }
      },
      {
        test: /\.tag$/,
        exclude: /node_modules/,
        use: [
          {loader: 'organic-oval/webpack/oval-loader'}
        ]
      }
    ]
  }
}
