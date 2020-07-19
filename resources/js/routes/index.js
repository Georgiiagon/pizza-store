import Vue from 'vue';
import VueRouter from 'vue-router';
import cart from './modules/cart'
import home from './modules/home'
import login from './modules/login'
import {store} from '../store/index.js';

Vue.use(VueRouter);

let router = new VueRouter({
    routes: [
        {
            path: '',
            component: () => import('../views/layouts/Layout.vue'),
            name: 'layout',
            children: [
                ...[{path: '', redirect: 'home'}],
                ...home,
                ...cart,
                ...login
            ]
        },
    ],
});

export {router};
