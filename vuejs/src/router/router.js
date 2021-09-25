import Vue from 'vue'
import VueRouter from 'vue-router'


import { Login, Home, Middleware } from "..";

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
        beforeEnter: (to, from, next) => {
            Middleware.verify(to, from, next)
        }
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
        beforeEnter: (to, from, next) => {
            Middleware.verify(to, from, next)
        }
    },
    {
        name: 'Google',
        path: '/google',
        props: {
            page: 3,
        },
        meta: {
            auth: false,
        },
        beforeEnter: (to, from, next) => {
            Middleware.verify(to, from, next)
        }
    },
    {
        path: '*',
        redirect: { name: 'Home' },
    }
];



export default new VueRouter({
    mode: 'history',
    base: '/',
    fallback: true,
    routes: route
})