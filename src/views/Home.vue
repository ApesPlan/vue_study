<template>
  <div class="home">
    <b>{{ food }}</b>
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
     <!-- <button @click="handleClick">返回上一页</button> -->
    <button @click="handleClick('back')">返回上一页</button>
    <button @click="handleClick('push')">跳转到parent</button>
    <button @click="handleClick('replace')">替换到parent</button>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    // HelloWorld
  },
  props: {
    food: {
      type: String,
      default: 'apple'
    }
  },
  // 组件内的钩子
  // 页面还没有渲染 不能使用this，获取不到当前组件的实例
  // 路由被确认前调用
  beforeRouteEnter (to, from, next) {
    console.log(to.name)
    console.log(from.name)
    next()
    // next(vm => { // 这里可以查看组件的实例
    //   console.log(vm)
    // })
  },
  // 路由即将离开的时候
  beforeRouteLeave (to, from, next) {
    // this
    const leave = confirm('你确定要离开吗？')
    if (leave) next()
    else next(false)
  },
  methods: {
    handleClick (type) {
      // this.$router.go(-1);
      // this.$router.go(1);
      // this.$router.back();
      if (type === 'back') this.$router.back();
      // 跳转
      // else if (type === 'push') this.$router.push('/parent');
      else if (type === 'push') {
        // history有记录
        // const name = 'lison';
        this.$router.push({
          name: 'parent',
          query: {
            name: 'lison'
          }

          // name: 'argu',
          // params: {
          //   name: 'lison'
          // }
          // es6语法
          // name: `/argu/${name}`

          // name: `argu`,
          // params: {
          //   name: 'lison'
          // }
          // 这个带不过去参数
          // path: `/argu`,
          // params: {
          //   name: 'lison'
          // }
        });
      } else if (type === 'replace') {
        // 替换 history无记录
        this.$router.replace({
          name: 'parent'
        });
      }
    }
  }
}
</script>
