const state = {
  userName: 'Lison'
}
const getters = {
  firstLetter: () => {
    return state.userName.substr(0, 1)
  }
}
const mutations = {
  SET_USER_NAME (state, params) {
    state.userName = params
  }
}
const actions = {
  updataUserName({ commit, state, rootState, dispatch }) {
    // rootState.appName
    // dispatch('xxx', '')
  },
  xxx() {
    // dispatch可以触发，action
  }
}
// const modules = {
// }

export default {
  // 使用命名空间
  // namespaced: true,
  getters,
  state,
  mutations,
  actions,
  modules: {
    // 模块中还有模块
  }
}
