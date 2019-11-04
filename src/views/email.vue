<template>
  <div class="email">
    <button @click="handleClick">按我</button>
  </div>
</template>
<script>
export default {
  methods: {
    handleClick () {
      this.$bus.$emit('on-click', 'hello')
      // this.$emit('on-click', 'hello') // 本地触发事件
    }
  },
  mounted () {
    console.log(this.$bus)
    // this.$on('on-click', mes => { // 本地触发事件
    //   console.log(mes)
    // })
  }
}
</script>
<style lang="less" scoped>
.email {
  border: 1px solid green;
}
</style>
