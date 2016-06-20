<template>
    <div class="com_a">this is component a,message is {{msg}}</div>
</template>
<style>
    .com_a{
        color: #690;
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