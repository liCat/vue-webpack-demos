<template lang="jade">
    .com_a this is component a,message is
        span {{msg}}
    p.less
        a(href="http://www.bolo.me") less is ready....
    p {{text.kBottomMenu1Txt}}
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
                text:{'kBottomMenu1Txt':'22'},
                msg:'hello vue'
            }
        },
        ready(){
            this.$http.get("/api/text",function (data) {
                this.$set('text',data.data.text);

            })
        }
    }
</script>