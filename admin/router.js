import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from "@/page/Dashboard";
import Category from "@/page/Category";
import Product from "@/page/Product";
import Order from "@/page/Order/index.vue";
import OrderDetail from "@/page/OrderDetail/index.vue"

Vue.use(Router)


export default new Router({
    mode : 'history',
    routes : [
        {
            path : "/",
            name : 'dashboard',
            component : Dashboard,
        },
        {
            path : "/category",
            name : "category",
            component : Category,
        },
        {
            path : "/product",
            name : "product",
            component : Product,
        },
        {
            path : "/admin/order",
            name : "Order",
            component : Order,
        },
        {
            path : "/order-detail/:params",
            name : "OrderDetail",
            component : OrderDetail,
        },
    ]
})
