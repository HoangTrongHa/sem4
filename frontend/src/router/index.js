import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Infor from '../views/Infor/index.vue'
import ProductByCateId from '../views/product/_cate-name'
import CheckOut from '../views/CheckOut/index'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/gioi-thieu/',
    name: 'Infor',
    component: Infor
  },
  {
    path: '/danh-muc/:name',
    name: 'ProductByCateId',
    component: ProductByCateId
  },
  {
    path: '/check-out/',
    name: 'CheckOut',
    component: CheckOut
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
