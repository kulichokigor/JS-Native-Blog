var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry:['@babel/polyfill','./src/index.js'],
  output:{
    filename:'bundle.js',
    path:path.resolve(__dirname,'dist')
  },
  plugins: [new HtmlWebpackPlugin({
    filename:'index.html',
    template:'./src/index.html'
  })],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  resolve:{
    extensions:['.js']
  },
  module: {
    rules: [
      {test: /\.js$/,exclude: /node_modules/,loader: 'babel-loader'}
    ]
  }
}