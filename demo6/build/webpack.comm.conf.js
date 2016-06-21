
const path = require('path'),
      webpack = require('webpack'),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      ExtractTextPlugin= require("extract-text-webpack-plugin");
var ExtractCssInstance = new ExtractTextPlugin("[name]_[hash:4].css");
module.exports = {
  resolve: {
    /*查找模块时，可省模块文件的扩展名*/
    extensions: ['', '.js', '.vue']
  },
  module: {

    loaders: [
      // 使用vue-loader 加载 .vue 结尾的文件
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      // 使用babel-loader加载 js文件
      {
        test:/\.js$/,
        loader: 'babel?presets=es2015',
        exclude: /node_modules/
      },
      {
        test:/\.(sass|scss)$/,
        loader: "sass"
      },
      {
        test:/\.less$/,
        loader: "less"
      },
      {
        test:/\.css$/,
        loader: ExtractCssInstance.extract(["style-loader", "css-loader"])
      },
    ]
  },
  vue:{
    loaders:{
      css :ExtractCssInstance.extract("css"),
      sass :ExtractCssInstance.extract(["css","sass"]),
      scss :ExtractCssInstance.extract(["css","sass"]),
      less :ExtractCssInstance.extract(["css","less"])
    }
  },
  plugins:[
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    ExtractCssInstance,

    new HtmlWebpackPlugin({
      filename: `index.html`, //相对于output.path,产出路径。
      template: path.resolve(__dirname, `../src/index_template.html`), //html模板,绝对路径。
      inject: true,
      title: `demo1`
    })
  ]
}