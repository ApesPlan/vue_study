import vue from "vue"

// mutations不能做异步操作，只能做同步
const mutations = {
  SET_APP_NAME (state, params) {
    state.appName = params
    // state.appName = params.newAppName
  },
  SET_APP_VERSION (state) {
    vue.set(state, 'appVersion', 'v1.0')
    // state.appVersion = 'v2.0' // 不能响应式更新
  }
}
export default mutations
