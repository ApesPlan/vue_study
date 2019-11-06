// 持久化存储插件
// export const saveInLocal = store => { // store初始化的时候调用
export default store => { // store初始化的时候调用
  // 每次刷新浏览器的操作
  console.log('store初始化了')
  if (localStorage.state) store.replaceState(JSON.parse(localStorage.state))
  // 每次有mutation的时候，都会触发这个函数
  store.subscribe((mutation, state) => {
    //
    console.log('提交mutation')
    localStorage.state = JSON.stringify(state)
  })
}
