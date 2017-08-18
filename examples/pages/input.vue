<template>
    <div>
        <h2>Input</h2>
        <moe-input v-model="value1" placeholder="Name" style="width:300px;"></moe-input>
        <p>支持v-model: {{value1}}</p>
        <h2>Texterea</h2>
        <moe-input type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Name" style="width:300px;"></moe-input>
        <h2>Input-Disable</h2>
        <moe-input :disabled="true" placeholder="Name" style="width:300px;"></moe-input>
        <h2>Input-Neko</h2>
        <moe-input icon="neko" :center="true" placeholder="> - <" style="width:100px;"></moe-input>
        
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