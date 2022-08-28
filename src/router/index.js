import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
    name: "Home",
    path: "/",
    component: () =>
        import (
            /* webpackChunkName: "homePage" */
            "@/pages/home"
        ),
}, ];

const router = new VueRouter({
    routes,
    mode: "history",
});

export default router;