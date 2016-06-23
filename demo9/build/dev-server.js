// 引入必要的模块
const express= require("express"),
      webpack = require("webpack");
var   argv = require ("optimist").argv;

var config = require("./webpack.dev.conf")(argv.pro);

var proxy = require("./proxy");

// 创建一个express实例
var app = express();
proxy.api(app);

// 调用webpack并把配置传递过去
var compiler = webpack(config)

// 使用 webpack-dev-middleware 中间件
var devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath,
    stats: {
        colors: true,
        chunks: false
    },
    hot: true,
    historyApiFallback:true,
    proxy: proxy.proxyList
})
// 使用 webpack-hot-middleware 中间件
var hotMiddleware = require('webpack-hot-middleware')(compiler)

// webpack插件，监听html文件改变事件
compiler.plugin('compilation', function (compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
        // 发布事件
        hotMiddleware.publish({ action: 'reload' })
        cb()
    })
})


app.use(hotMiddleware)

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