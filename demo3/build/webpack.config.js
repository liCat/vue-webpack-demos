
const path = require('path'),
      HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // 入口文件，path.resolve()方法，可以结合我们给定的两个参数最后生成绝对路径，最终指向的就是我们的index.js文件
  entry: path.resolve(__dirname, `../src/index.js`),
  // 输出配置
  output: {
    // 输出路径是 release
    path: path.resolve(__dirname, '../release'),
    publicPath: `/`,
    filename: `[name]_[hash:4].js`,
    chunkFilename: `[id].[chunkhash].js`
  },
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
      }
    ]
  },
  
  /*自动生成html文件,在文件中插入打包后的js文件*/
  plugins: [
    new HtmlWebpackPlugin({
      filename: `index.html`, //相对于output.path,产出路径。
      template: path.resolve(__dirname, `../src/index.html`), //html模板,绝对路径。
      inject: true,
      title: `demo1`
    })
  ]
}