const state = {
  userName: 'Lison'
}
const getters = {
  firstLetter: () => {
    return state.userName.substr(0, 1)
  }
}
const mutations = {
}
const actions = {
}
// const modules = {
// }

export default {
  // 使用命名空间
  namespaced: true,
  getters,
  state,
  mutations,
  actions
}
