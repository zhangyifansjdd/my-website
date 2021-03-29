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
    path: '/baozhang',
    name: 'baozhang',
    meta: {title: '填报大师'},
    component: () => import(/* webpackChunkName: "baozhang" */ '../views/baozhang/index'),
  },
  {
    path: '/bzLogin',
    name: 'login',
    meta: {title: '登录'},
    component: () => import(/* webpackChunkName: "baozhang_login" */ '../views/baozhang/login')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {path: '*', redirect: '/404',name:'*'},
  {
    path: '/404',
    name:'404',
    component: () => import(/* webpackChunkName: "404" */'../views/Error'),
    meta: {title: '页面未找到'}
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
