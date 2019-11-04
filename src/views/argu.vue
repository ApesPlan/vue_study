<template>
  <div>
    <!-- $route当前路由对象 -->
    <!-- {{ $route.params.name }} -->
    <!-- 路由组件传参 -->
    {{ name }}
  </div>
</template>
<script>
export default {
  props: {
    name: {
      // type:[String, Number]
      type: String,
      default: 'lison'
    }
  },
  beforeRouteUpdate (to, form, next) {
    // this
    console.log(to.name, from.name)
    next()
  }
}
</script>
