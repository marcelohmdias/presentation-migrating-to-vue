const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {

  mode: 'development',

  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'build.js'
  },

  devServer: {
    compress: true,
    contentBase: path.join(__dirname, 'dist'),
    port: 8080
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-env']
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader']
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  },

  plugins: [
    new HtmlPlugin({
      title: 'Exampole',
      template: path.join(__dirname, 'src', 'index.html')
    }),

    new VueLoaderPlugin(),

    new MiniCssExtractPlugin({
      filename: 'style.css'
    })
  ]
}
