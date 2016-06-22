<template>
    <div class="app">
        <component-a></component-a>
        <component-b></component-b>
    </div>
</template>

<script>
    import ComponentA from 'src/components/componentB.vue'
    import ComponentB from './ComponentA.vue'

    export default {
        components: {
            ComponentA,
            ComponentB
        }
    }
</script>