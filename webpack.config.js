const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')

const plugins = [
  new HtmlWebpackPlugin({
    title: 'gyronorm-viz',
  }),
  new AddAssetHtmlPlugin({
    filepath: path.join(__dirname, './src/style.css'),
    typeOfAsset: 'css',
    includeSourcemap: false
  })
]

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, './dist')
  },
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    port: 8080
  },
  devtool: 'cheap-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'buble-loader'
      }
    ]
  },
  plugins: plugins
}

