<template>
    <div>
        <h2>Input</h2>
        <moe-input v-model="value1" placeholder="Name" style="width:300px;"></moe-input>
        <p>支持v-model: {{value1}}</p>
        <h2>Texterea</h2>
        <moe-input type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Name" style="width:300px;"></moe-input>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                value1: ''
            }
        }
    }
</script>

<style>

</style>