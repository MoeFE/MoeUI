import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';

import * as Pages from './pages';

Vue.use(VueRouter);
// Vue.config.debug = true;

let pages = Pages.default;

const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: pages.start
        }, {
            path: '/button',
            component: pages.button
        }, {
            path: '/layout',
            component: pages.layout
        }, {
            path: '/color',
            component: pages.color
        }
    ]
});

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});
