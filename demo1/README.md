###[返回根目录](https://github.com/liCat/vue-webpack-demos)
##step 1 基本打包
新建目录src、release作为源文件和打包后的文件。
src中index.html为html模板文件，index.js是入口文件，components为组件文件。
*./webpack.config.js*
```javascript

const path = require('path'),
      HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // 入口文件，path.resolve()方法，可以结合我们给定的两个参数最后生成绝对路径，最终指向的就是我们的index.js文件
  entry: path.resolve(__dirname, `./src/index.js`),
  // 输出配置
  output: {
    // 输出路径是 release
    path: path.resolve(__dirname, './release'),
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
      }
    ]
  },
  /*自动生成html文件,在文件中插入打包后的js文件*/
  plugins: [
    new HtmlWebpackPlugin({
      filename: `index.html`, //相对于output.path,产出路径。
      template: path.resolve(__dirname, `./src/index.html`), //html模板,绝对路径。
      inject: true,
      title: `demo1`
    })
  ]
}
```
*./src/index.html*
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title><%=htmlWebpackPlugin.options.title %></title>
</head>
<body>
<app></app>
</body>
</html>
```
*./src/index.js*
```
/**
 * Created by shaoXia on 2016/6/19.
 */
import Vue from "vue"
import App from "./components/App"

new Vue({
  el:"body",
  components: {
    app: App
  }
})
```
*./src/components/App.vue*
```
<template>
    <div class="app">
        <component-a></component-a>
        <component-b></component-b>
    </div>
</template>

<script>
    import ComponentA from './ComponentA.vue'
    import ComponentB from './ComponentB.vue'

    export default {
        components: {
            ComponentA,
            ComponentB
        }
    }
</script>
```
*./src/components/componentA.vue*
```
<template>
    <div class="com_a">this is component a,message is {{msg}}</div>
</template>
<style>
    .com_a{
        color: #690;
    }
</style>
<script>
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        }
    }
</script>
```
*./src/components/componentB.vue*
```
<template>
    <div class="com_a">this is component b,message is {{msg}}</div>
</template>
<style>
    .com_a{
        color: #960;
    }
</style>
<script>
    export default{
        data(){
            return{
                msg:'hello bolome'
            }
        }
    }
</script>
```
