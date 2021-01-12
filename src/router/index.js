import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/career',
    name: 'Karir',
    component: () => import('../views/karir/Karir.vue')
  },
  {
    path: '/contact',
    name: 'Kontak',
    component: () => import('../views/contact.vue')
  },
  {
    path: '/faq',
    name: 'faq',
    component: () => import('../views/faq/faq.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
