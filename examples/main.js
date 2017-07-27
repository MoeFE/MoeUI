import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';

Vue.use(VueRouter);
// Vue.config.debug = true;

new Vue({
    el: '#app',
    render: h => h(App)
});
