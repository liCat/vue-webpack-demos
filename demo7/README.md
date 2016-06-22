###[返回根目录](https://github.com/liCat/vue-webpack-demos)
##step 7 多环境打包
不满足于demo6 打的release包不带cdn资源引用的功能、没有其它环境的打包，且每次文件有变更需要手动删除原来已经打包了的文件（因为带有hash）。

所以demo7 将实现打包前自动删除原有文件，多环境打包，引用绝对路径。

使用fs模块的几种方法将已经存在的打包文件删除。

使用 optimist 模块从命令行获取参数。


