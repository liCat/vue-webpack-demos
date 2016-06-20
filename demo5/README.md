###[返回根目录](https://github.com/liCat/vue-webpack-demos)
##step 4 自定义webpack dev-server。
不满足于demo4 中没有实现自动刷新，或者局部替换，需要手动刷新。只需要做到以下三点。并将逻辑处理优雅一点。

- 在webpack.config.js中添加HotModuleReplacementPlugin插件。
- 在入口中添加'webpack-hot-middleware/client'，
- 在 dev-server中使用插件。


然而，发现修改src中index.html并没触发热替换。因为它不在我们的监听范围之内。所以我们给html-webpack-plugin添加一点东西，在它发送文件到内存中后，我们通过socket.io给客户端广播一个事件，并让客户端能够收听到这个事件，触发刷新。
所以要做的事情有两件。

- 把添加到入口的热替换的文件撤回来改造一下成为"dev-client.js"，让它可以收听服务端广播的事件。
- 给服务端添加一个广播。这个广播是在html-webpack-plugin 完成文件发送后触发。
