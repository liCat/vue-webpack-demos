##step 3 webpack-dev-server
```
$ webpack-dev-server --config ./webpack.config.js --hot --inline --port 80
```
在本地的80端口启动服务。
这个服务的publicPath见webpack.config.js的output.publicPath。
这个服务是以行内模式启动的。
这个服务具备文件的热替换功能。