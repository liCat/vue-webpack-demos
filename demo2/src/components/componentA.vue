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