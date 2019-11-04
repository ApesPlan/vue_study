import Home from '@/views/Home.vue'
export default [
  {
    path: '/',
    alias: '/home_page', // 路由别名 localhost:8080/home_page
    name: 'home',
    component: Home,
    props: route => ({
      food: route.query.food
    }),
    // props: route => {
    //   return {

    //   }
    // }
    // 路由独享守卫
    beforeEnter: (to, from, next) => {
      // if (from.name === 'about') alert('这是从about页来的')
      // else alert('这不是从about页来的')
      next()
    }
  },
  {
    path: '/about',
    name: 'about', // 命名路由
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
    // 路由组件传参，解耦 对象模式 路由中直接传
    props: {
      food: 'banana'
    },
    // 路由源信息 meta
    meta: {
      title: '关于'
    }
  },
  // 嵌套路由
  {
    path: '/parent',
    name: 'parent',
    component: () => import('@/views/parent.vue'),
    children: [
      {
        // path: '/child', 子路径就不用加/
        path: 'child',
        component: () => import('@/views/child.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue'),
  },
  {
    path: '/argu/:name',
    name: 'argu',
    component: () => import('@/views/argu.vue'),
    // 路由组件传参，解耦 $router.param.name
    props: true
  },
  // 路由重定向
  {
    path: '/main',
    name: 'main',
    // redirect: '/'
    // redirect: {
    //   name: 'home'
    // }
    // redirect: to => '/'
    redirect: to => {
      // console.log(t o)
      // return {
      //   name: 'home'
      // }
      return '/'
    }
  },
  {
    path: '/named_view',
    name: 'named_view',
    components: {
      default: () => import('@/views/child.vue'),
      email: () => import('@/views/email.vue'),
      tel: () => import('@/views/tel.vue'),
    }
  },
  {
    path: '/store',
    name: 'store',
    component: () => import('@/views/store.vue'),
  },
  {
    path: '*',
    component: () => import('@/views/error_404.vue')
  }
]
