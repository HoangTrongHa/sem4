import Vue from "vue";
import Router from "vue-router";
import Dashboard from "@/page/Dashboard";
import Category from "@/page/Category";
import Product from "@/page/Product";
import Order from "@/page/Order";
Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: Dashboard
    },
    {
      path: "/category",
      name: "category",
      component: Category
    },
    {
      path: "/product",
      name: "product",
      component: Product
    },
    {
      path: "/order",
      name: "order",
      component: Order
    }
  ]
});
