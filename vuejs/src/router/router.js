import Vue from 'vue'
import VueRouter from 'vue-router'


import { Login, Home } from "..";

Vue.use(VueRouter)

const route = [
    {
        name: 'Home',
        path: '/',
        component: Home,
        props: {
            page: 1,
        },
        meta: {
            auth: true,
        },
    },
    {
        name: 'Login',
        path: '/login',
        component: Login,
        props: {
            page: 2,
        },
        meta: {
            auth: false,
        },
    }
];



export default new VueRouter({
    mode: 'history',
    base: '/',
    fallback: true,
    routes: route
})