import VueRouter from "vue-router";
import Vue from "vue";
Vue.use(VueRouter);

export const router = new VueRouter({
    routes: [{
            path: '/',
            name: 'home',
            component: () =>
                import ('@/pages/Home.vue')
        },
        {
            path: '/chi-tiet-san-pham/:id/:name',
            name: 'detail-product',
            component: () =>
                import ('@/pages/ProductDetail.vue')
        }, {
            path: '/register',
            name: 'register',
            component: () =>
                import ('@/pages/Register.vue')
        }, {
            path: '/login',
            name: 'login',
            component: () =>
                import ('@/pages/Login.vue')
        },
    ],
    mode: "history"
})