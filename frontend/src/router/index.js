import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Infor from '../views/Infor/index.vue'
import ProductByCateId from '../views/product/_cate-name'
import CheckOut from '../views/CheckOut/index'
import Login from '../views/login/index'
import Gallery from '../views/Gallery/index'
import GalleryAll from '../views/Gallery/Page/All'
import Dress from '../views/Gallery/Page/Dress'
import NeckPillow from '../views/Gallery/Page/NeckPillow'
import Japan from '../views/Gallery/Page/Japan'
import Accessory from '../views/Gallery/Page/Accessory'
import Event from '../views/Gallery/Page/Event'
import AntiqueCostume from '../views/Gallery/Page/AntiqueCostume'
import Exhibition from '../views/Gallery/Page/Exhibition'
import Contact from '../views/contact/index'

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
  {
    path: '/account/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/gallery-lookbook/',
    name: 'GALLERY&LOOKBOOK',
    component: Gallery,
    redirect: { name: "All" },
    children: [
      {
        path: "/gallery-lookbook/all",
        name: "All",
        component: GalleryAll
      },
      {
        path: "/gallery-lookbook/ao-dai",
        name: "Dress",
        component: Dress
      },
      {
        path: "/gallery-lookbook/goi-xep-co",
        name: "NeckPillow",
        component: NeckPillow
      },
      {
        path: "/gallery-lookbook/goi-xep-co",
        name: "NeckPillow",
        component: NeckPillow
      },
      {
        path: "/gallery-lookbook/nhat-dung",
        name: "Japan",
        component: Japan
      },
      {
        path: "/gallery-lookbook/phu-kien",
        name: "Accessory",
        component: Accessory
      },
      {
        path: "/gallery-lookbook/su-kien",
        name: "Event",
        component: Event
      },
      {
        path: "/gallery-lookbook/trang-phuc-co",
        name: "AntiqueCostume",
        component: AntiqueCostume
      },
      {
        path: "/gallery-lookbook/trien-lam",
        name: "Exhibition",
        component: Exhibition
      }
    ]
  },
  {
    path: '/lien-he',
    name: 'Contact',
    component: Contact
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
