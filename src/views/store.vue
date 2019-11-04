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
    <p>appNameWithVersion: {{ appNameWithVersion }}</p>
    <button @click="handleChangeAppName">修改appName</button>
    <!-- <p>{{ appVersion }}</p> -->
    <button @click="handleChangeUserName">修改用户名</button>
  </div>
</template>
<script>
// import Ainput from '@/components/AInput.vue'
// import AInput from '_c/AInput.vue'
// import AShow from '_c/AShow.vue'
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
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
    // appName () {
    //   return this.$store.state.appName
    // },
    // userName () {
    //   return this.$store.state.user.userName
    // }

    // ...mapState([ //...展开操作符
    //   'appName'
    // ]),

    ...mapGetters([
      'appNameWithVersion'
    ]),

    // ...mapState({ //...展开操作符
    //   appName: state => state.appName,
    //   appVersion: state => state.appVersion
    // }),

    ...mapState({ //...展开操作符
      appName: state => state.appName,
      userName: state => state.user.userName,
      appVersion: state => state.appVersion
    }),

    // ...mapState({ //...展开操作符
    //   userName: state => state.user.userName,
    // }),

    // ...mapState({ //...展开操作符
    //   // 'appName'
    //   appName: state => state.appName,
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

    // 这样改appName
    // appName: {
    //   set: function () {
    //     this.inputValue = newValue + 'sd'
    //   },
    //   get: function () {
    //     return this.inputValue + 'sdasdf'
    //   }
    // },

//xxx
    // firstLetter () {
    //   return this.state.userName.substr(0, 1)
    // },

    // ...mapGetters('user', [
    //   'appNameWithVersion',
    //   // 'getters'
    // ]),

    // appNameWithVersion () {
    //   return this.$store.getters.appNameWithVersion
    // },
    // inputValueLastLetter () {
    //   return this.inputValue.substr(-1, 1)
    // }
  },
  methods: {
    ...mapMutations([
      'SET_APP_NAME',
      'SET_USER_NAME'
    ]),
    // user有命名空间时
    // ...mapMutations('user', [
    //   'SET_USER_NAME'
    // ]),
    // handleInput (val) {
    //   this.inputValue = val
    // }

    handleChangeAppName () {
      // this.appName = 'newAppName' // 不能这么修改，这么会报错
      // this.$store.commit('SET_APP_NAME', 'newAppName')
      // 对象写法
      // this.$store.commit('SET_APP_NAME', {
      //   newAppName: 'newAppName'
      // })
      // 对象写法
      // this.$store.commit({
      //   type: 'SET_APP_NAME',
      //   newAppName: 'newAppName'
      // })
      // this.SET_APP_NAME('newAppName')
      this.SET_APP_NAME({newAppName: 'newAppName'})
      // this.$store.commit('SET_APP_VERSION')
    },
    handleChangeUserName () {
      this.SET_USER_NAME('vueName')
    }
  }
}
</script>
