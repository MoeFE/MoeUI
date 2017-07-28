<template>
    <div>
        <nav>
            <ul class="list">
                <li>
                    <router-link to="/">Home</router-link>
                </li>
                <li>
                    <router-link to="/layout">Layout</router-link>
                </li>
                <li>
                    <router-link to="/button">Button</router-link>
                </li>
                <li>
                    <router-link to="/color">Color</router-link>
                </li>
            </ul>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import "../src/styles/index.scss";
nav {
    position: absolute;
    width: 200px;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 1000;
    color: #C0B0FF;
}

a {
    text-decoration: none;
    color: inherit;
}

a:active {
    color: inherit;
}

.list,
.list li {
    list-style: none;
}

.list {
    li {
        width: 100%;
        height: 40px;
        font-size: 20px;
        a {
            width: 90%;
            float: right;
            line-height: 40px;
            transition: .3s;
            box-sizing: border-box;
            &:hover {
                width: 100%;
            }
        }
        .router-link-exact-active {
            border-bottom: 1px #ddd solid;
        }
    }
}
</style>
