// import { getAppName} from '@/api/app.js'
import { getAppName} from '@/api/app'
const actions = {
  updateAppName ({ commit }) {
    getAppName().then(res => {
      console.log(res)
      // const { code, info: { newAppName } } = res
      const { info: { newAppName } } = res
      console.log(newAppName)
      commit('SET_APP_NAME', newAppName)
      // commit('SET_APP_NAME', res.info.appName)
    }).catch(err => {
      console.log(err)
    })
  }

  // async updateAppName ({ commit }) {
  //   // const {  info: { newAppName } } = await getAppName
  //   // commit('SET_APP_NAME', newAppName)

  //   try {
  //     const {  info: { newAppName } } = await getAppName
  //     console.log(newAppName)
  //     // commit('SET_APP_NAME', newAppName)
  //   } catch (err) {
  //     console.log(err)
  //   }

  // }
}
export default actions
