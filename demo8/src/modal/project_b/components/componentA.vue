<template lang="jade">
    .com_a this is component a,message is
        span {{msg}}
    p.less
        a(href="http://www.bolo.me") less is ready....
</template>
<style lang="sass">
.com_a{
  color: #123;
    span{
        color: #399
    }
}
</style>
<style lang="less" scoped>
    .less{
        background: #690;
        a{
            font-size: 32px;
            color: #fff;
            text-decoration: none;
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