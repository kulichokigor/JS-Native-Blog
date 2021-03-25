const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry:['@babel/polyfill','./src/index.js'],
  output:{
    path:path.resolve(__dirname, 'dist'),
    filename:'native.bundle.js'
  },
  plugins:[
      new HtmlWebpackPlugin({
        filename:'index.html',
        template:'./src/html/index.html'
      }),
      
      new MiniCssExtractPlugin({
        filename:'style.css'
      })
    ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 7077
  },
  module: {
    rules: [
      {test: /\.js$/,exclude: /node_modules/,loader: 'babel-loader'},
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      }
    ]
  },
  resolve:{
    extensions:['.js']
  }
}