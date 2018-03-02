const path = require('path')
const srcDir = path.resolve(__dirname, 'src')
const publicDir = path.resolve(__dirname, 'public')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  context: srcDir,
  devtool: 'inline-source-map',
  entry: {
    index: './index.js'
  },
  output: {
    path: publicDir,
    filename: '[name].js'
  },
  devServer: {
    contentBase: publicDir,
    publicPath: '/',
    historyApiFallback: true,
    compress: true,
    open: true,
    port: 3000,
    openPage: ''
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'resolve-url-loader',
            'sass-loader?sourceMap'
          ],
          publicPath: './'
        })
      },
      {
        test: /\.(jpe?g|png|gif|svg|webp)$/i,
        use: [
          'file-loader?name=[path][name].[ext]',
          'image-webpack-loader?bypassOnDebug'
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'style.css'
    }),
    new HtmlWebpackPlugin({
      template: path.join(srcDir, 'index.html'),
      title: 'Custom template'
    })
  ]
}
