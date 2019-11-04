import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import routes from './router'

Vue.use(VueRouter)

// const routes = [

// ]

const router = new VueRouter({
  mode: 'history', // 找不到的静态页面都指向index.html
  // {
  //   path: '*',
  //   component: () => import('@/views/error_404.vue'),
  // }
  base: process.env.BASE_URL,
  // routes: routes
  routes
})

export default router
