import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Infor from '../views/Infor/index.vue'
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
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
