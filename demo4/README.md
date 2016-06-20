###[返回根目录](https://github.com/liCat/vue-webpack-demos)
##step 4 自定义webpack dev-server。
不满足于demo3 中webpack-dev-server对文件的暗箱操作。也为了后面开发情景复杂化后，掌控配制。

开始把打包相关的代码从源码中移除。所以新建build文件夹。

这里新加了几个npm包express,webpack-dev-middleware。

把webpack-dev-middleware作为express app的一个中间件。

修改了config中文件的指向。


不满足于手动刷新代码