// 引入必要的模块
const express= require("express"),
      webpack = require("webpack"),
      config = require("./webpack.config");

// 创建一个express实例
var app = express();

// 调用webpack并把配置传递过去
var compiler = webpack(config)

// 使用 webpack-dev-middleware 中间件
var devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath,
    stats: {
        colors: true,
        chunks: false
    }
})

// 注册中间件
app.use(devMiddleware)

// 监听 80端口，开启服务器
app.listen(80, function (err) {
    if (err) {
        console.log(err)
        return
    }
    console.log('Listening at http://localhost:80')
})