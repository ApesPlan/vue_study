import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import routes from './router'
import {setTitle} from '@/lib/util'

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

const HAS_LOGINED = true // 是否登录

// 全局路由前置守卫
// to即将跳转的路由对象
// from当前将要离开的路由对象
// next回调函数
// 跳转之前处理的逻辑
router.beforeEach((to, from, next) => {
  // 路由源信息的使用 meta
  // if (to.meta.title)
  // to.meta && to.meta.title && setTitle(to.meta.title)
  to.meta && setTitle(to.meta.title) // 比if更简便
  if (to.name !=='login') {
    if (HAS_LOGINED) next()
    // 跟push一样
    // else next({ path: '/login' })
    // else next('/login')
    else next({ name: 'login' })
  } else {
    if (HAS_LOGINED) next({ name: 'home' })
    else next()
  }
})

// // 导航被确认，导航的所有钩子都结束
// router.beforeResolve((to, from, next) => {
//   //
// })

// // 不能阻止页面的跳转，后置钩子
// router.afterEach((to, from) => {
//   //
// })

export default router

// 导航被触发。
// 在失活的组件(即将离开的页面组件)里调用离开守卫。 beforeRouteLeave
// 调用全局的（前置守卫） beforeEach 守卫。
// 在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。 动态路由经常复用 '/argu/:name'
// 在路由配置里调用 beforeEnter。 独享路由
// 解析异步路由组件。
// 在被激活的组件（即将进入的页面组件）里调用 beforeRouteEnter。
// 调用全局的 （解析守卫）beforeResolve 守卫 (2.5+)。
// 导航被确认。
// 调用全局的（后置守卫） afterEach 钩子。 所有的钩子完成了
// 触发 DOM 更新。
// 用创建好的实例调用 beforeRouteEnter 守卫中传给 next 的回调函数。

