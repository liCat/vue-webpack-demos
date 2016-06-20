###[返回根目录](https://github.com/liCat/vue-webpack-demos)
##step 2 添加sass、less和jade语法
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

而template 这里用的是jade。它要求我们安装 jade而不是jade-loader，而且不需要写进config中。