import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from "@/page/Dashboard";
import Category from "@/page/Category";
import Product from "@/page/Product";
import Order from "@/page/Order/index.vue";
import OrderDetail from "@/page/OrderDetail/index.vue"
import AllOrder from "@/page/Order/page/AllOrder.vue"
import Complete from "@/page/Order/page/Complete.vue"
import InTheImplementationProcess from "@/page/Order/page/InTheImplementationProcess.vue"
import OutOfDate from "@/page/Order/page/OutOfDate.vue"
import WaitForConfirmation from "@/page/Order/page/WaitForConfirmation.vue"
import OrderBuy from "@/page/Order/page/OrderBuy.vue"
import OrderThue from "@/page/Order/page/OrderBuy.vue"
import getOrderRequestReturn from "@/page/Order/page/OrderRequestReturn.vue"
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
            redirect: { name: "AllOrder" },
            children: [
                {
                    path: "/all-order",
                    name: "AllOrder",
                    component: AllOrder
                },
                {
                    path: "/complete-order",
                    name: "complete",
                    component: Complete
                },
                {
                    path: "/InTheImplementationProcess",
                    name: "InTheImplementationProcess",
                    component: InTheImplementationProcess
                },
                {
                    path: "/out-of-date-order",
                    name: "OutOfDate",
                    component: OutOfDate
                },
                {
                    path: "/wait-for-confirmation",
                    name: "WaitForConfirmation",
                    component: WaitForConfirmation
                },
                {
                    path: "/order-buy",
                    name: "OrderBuy",
                    component: OrderBuy
                },
                {
                    path: "/order-thue",
                    name: "OrderThue",
                    component: OrderThue
                },
                {
                    path: "/order-getOrderRequestReturn",
                    name: "getOrderRequestReturn",
                    component: getOrderRequestReturn
                },
            ]
        },
        {
            path : "/order-detail/:params",
            name : "OrderDetail",
            component : OrderDetail,
        },
    ]
})
