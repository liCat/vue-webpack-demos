###[返回根目录](https://github.com/liCat/vue-webpack-demos)
#step 2 添加sass、less和jade语法及webpack-dev-server
## 添加sass、less和jade语法
在webpack.config.js中添加loader如下
```
{
    test:/\.(sass|scss)$/,
    loader: "sass"
},
{
    test:/\.less$/,
    loader: "less"
}
```
此时的componentA.vue如下
```
<template lang="jade">
    .com_a this is component a,message is
        span {{msg}}
    p.less
        a(href="http://www.bolo.me") less is ready
</template>
<style lang="sass">
.com_a{
  color: #690;
    span{
        color: #f32
    }
}
</style>
<style lang="less" scoped>
    .less{
        background: #321;
        a{
            color: #f22;
        }
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
值得注意的是这里style指定lang="sass"，实际上是用的scss语法,如果直接在 style中用sass语法还会报错，如果想用可以用src指向外部文件，或者 @import 引入 外部文件。希望新的vue-loader有解决方案。

##关于webpack-dev-server
```
$ webpack-dev-server --config ./webpack.config.js --hot --inline --port 80
```
在本地的80端口启动服务。
这个服务的publicPath见webpack.config.js的output.publicPath。
这个服务是以行内模式启动的。
这个服务具备文件的热替换功能。