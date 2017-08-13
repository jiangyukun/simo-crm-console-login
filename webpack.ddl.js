/**
 * 将类库代码单独打包
 * Created by jiangyukun on 2016/12/9.
 */
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
process.env.NODE_ENV = 'production'

const vendors = [
  'babel-polyfill',
  'classnames',
  'dom-helpers',
  'history',
  'immutable',
  'moment',
  'isomorphic-fetch',
  'prop-types',
  'react',
  'react-dom',
  'react-redux',
  'react-router',
  'react-router-dom',
  'react-router-redux',
  'redux',
  'antd/lib/date-picker'
]

module.exports = {
  output: {
    path: __dirname + '/build',
    filename: 'lib' + '.min.js',
    library: '[name]'
  },
  entry: {
    'lib': vendors
  },

  module: {
    loaders: [
      {test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/, include: __dirname},
      {test: /\.less$/, loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: ['css-loader', 'postcss-loader', 'less-loader']})},
      {test: /\.scss$/, loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: ['css-loader', 'postcss-loader', 'sass-loader']})},
      {test: /\.(jpg|png|svg)$/, loader: 'url-loader?limit=8192'}
    ]
  },

  plugins: [
    new ExtractTextPlugin('common' + '.css'),
    new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)}),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.DllPlugin({
      path: 'manifest.json',
      name: '[name]',
      context: __dirname
    })
  ]
}
