###[返回根目录](https://github.com/liCat/vue-webpack-demos)
##step 5 开发与打包配置分离。
不满足于demo4 中webpack-dev-server添加一些额外的文件到入口中，以及开发环境的配置和打包的配置混合在一起，所以添加了这个版本。

要做的事情：把共用的配置和各自会用到的配置剥离。这里要区分哪些是共用的，哪些是私用配置。
共用配置：上下文、module、部分插件、resolve等
私有配置：入口、出口、devtool等。
这样以来，私有配置扩展一下共用配置，即可形成一个新的完整的配置传给编译器使用。

因为一个项目会有开发、测试、线上等环境。而其中又涉及到cdn资源等路径问题，最好是为每个环境生成一份打包代码。其中本地开发环境可以不用生成代码，从内存中server出去。

所以就有了以下修改：
- 把本地开发路径指向src目录。
- 把打包后的路径指向 release目录。
**出发吧，为给这些环境打包代码准备私有配置。**
新加文件

- webpack.dev.conf.js,
- webpack.release.conf.js

变更文件名 webpack.config.js => webpack.common.conf.js

其它有修改的文件：dev-server.js