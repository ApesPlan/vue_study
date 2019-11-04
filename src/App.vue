<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> | -->
      <router-link :to="{ name: 'home' }">Home</router-link>
      <br />
      <!-- <router-link to="/about">About</router-link> -->
      <!-- <router-link v-bind:to="{ name: 'about' }">About</router-link> -->
      <router-link :to="{ name: 'about' }">About</router-link>
      <br />
      <router-link :to="{ name: 'main' }">重定向</router-link>
      <br />
      <router-link :to="{ name: 'parent' }">嵌套路由</router-link>
      <br />
      <router-link :to="{ name: 'login' }">登录页</router-link>
      <br />
      <router-link :to="{ name: 'argu' }">路由传参</router-link>
      <br />
      <router-link :to="{ name: 'named_view' }">路由指定展示</router-link>
      <br />
      <router-link :to="{ name: 'store' }">vuex</router-link>
      <br />
    </div>
    <!-- <router-view/> -->
    <!-- 路由的动态效果 -->
    <!-- <transition-group name="router"> -->
    <transition-group :name="routerTransition">
      <router-view key="default"/>
      <router-view key="email" name="email"/>
      <router-view key="tel" name="tel"/>
    </transition-group>
  </div>
</template>
<script>
export default {
  data () {
    return {
      routerTransition: ''
    }
  },
  watch: {
    '$route' (to) {
      // /about?transitionName=router
      to.query && to.query.transitionName && (this.routerTransition = to.query.transitionName)
    }
  }
}
</script>
<style lang="less">
// 页面进入时的效果
.router-enter{
  opacity: 0;
}
.router-enter-active{
  transition: opacity 1s ease;
}
.router-enter-to{
  opacity: 1;
}
// 页面退出时的效果
.router-leave{
  opacity: 1;
}
.router-leave-active{
  transition: opacity 1s ease;
}
.router-leave-to{
  opacity: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
