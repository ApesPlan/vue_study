import Vue from 'vue'
import Vuex from 'vuex'
// import config from './config'
// import config from './config/index'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import user from './module/user'
import saveInlocal from './plugin/saveInLocal'

Vue.use(Vuex)

export default new Vuex.Store({
  // state: {
  // },
  // mutations: {
  // },
  // actions: {
  // },
  // modules: {
  // }
  // stric: true, // 严格模式 组件内直接给state赋值，报错
  stric: process.env.NODE_ENV === 'development',
  state,
  getters,
  mutations,
  actions,
  modules: {
    user
  },
  // 加载持久化插件
  plugins: [ saveInlocal ]
})
