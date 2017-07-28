<template>
    <div class="container">
        <div class="right">
            <h1>Moe UI</h1>
            <p>Moe is justice!!!</p>
        </div>
        
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    background: url('../assets/eromanga.jpg') no-repeat 150px bottom;
    background-size: 400px auto;
}

.right {
    float: right;
    width: 45%;
    color: #C0B0FF;
    font-size: 2rem;
    font-weight: 200;
    h1 {
        margin-top: 30vh;
        font-size: 4rem;
        font-weight: 200;
    }
    p {
        letter-spacing: 2px;
        word-spacing: 3px;
    }

}
</style>
