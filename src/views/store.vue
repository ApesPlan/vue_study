<template>
  <div>
    <!-- <a-input v-model="inputValue"/> -->
    <!-- <a-input :value="inputValue" @input="handleInput"/>
    <p>{{ inputValue }}</p>
    <a-show :content="inputValue"/> -->


    <!-- <a-input @input="handleInput"/>
    <p>{{ inputValue }} -> lastletter is {{ inputValueLastLetter }}</p> -->
    <p>appName: {{ appName }}</p>
    <p>userName: {{ userName }}</p>
    <!-- <p>firstLetter: {{ firstLetter }}</p> -->
    <!-- <p>appNameWithVersion: {{ appNameWithVersion }}</p> -->
  </div>
</template>
<script>
// import Ainput from '@/components/AInput.vue'
// import AInput from '_c/AInput.vue'
// import AShow from '_c/AShow.vue'
// import { mapState } from 'vuex'
// import { mapState, mapGetters } from 'vuex'
// import { createNamespacedHelpers } from 'vuex'
// const { mapState } = createNamespacedHelpers('user') // 传入命名空间名
export default {
  name: 'stroe',
  data () {
    return {
      inputValue: ''
    }
  },
  components: {
    // AInput, // 父子
    // AShow // 兄弟
  },
  computed: {
    // ...mapState([ //...展开操作符
    //   'appName'
    // ]),

    // ...mapState({ //...展开操作符
    //   // 'appName'
    //   appName: state => state.appName,
    //   userName: state => state.user.userName,
    // }),
    // ...mapState({ //...展开操作符
    //   userName: state => state.user.userName,
    // }),

    // ...mapGetters([
    //   'appNameWithVersion',
    //   'firstLetter'
    // ]),

    // ...mapState('user', { //...展开操作符
    //   userName: state => state.userName,
    // }),

    // ...mapGetters('user', [
    //   'firstLetter',
    // ]),

// import { createNamespacedHelpers } from 'vuex'
// const { mapState } = createNamespacedHelpers('user') // 传入命名空间名
    // ...mapState({ //...展开操作符
    //   userName: state => state.userName,
    // })

//xxx
    // firstLetter () {
    //   return this.state.userName.substr(0, 1)
    // },

    // ...mapGetters('user', [
    //   'appNameWithVersion',
    //   // 'getters'
    // ]),

    appName () {
      return this.$store.state.appName
    },
    userName () {
      return this.$store.state.user.userName
    }

    // appNameWithVersion () {
    //   return this.$store.getters.appNameWithVersion
    // },
    // inputValueLastLetter () {
    //   return this.inputValue.substr(-1, 1)
    // }
  },
  methods: {
    // handleInput (val) {
    //   this.inputValue = val
    // }
  }
}
</script>
