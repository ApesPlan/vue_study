const path = require('path')
// const resolve = dir => {
//   return path.join(__dirname, dir)
// }
const resolve = dir => path.join(__dirname, dir)

const BASE_URL = process.env.NODE_ENV === 'production' ? '/' : '/'
// const BASE_URL = process.env.NODE_ENV === 'production' ? '/iview-admin' : '/'
module.exports = {
  lintOnSave: false,
  publicPath : BASE_URL,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
  },
  // 打包时不生成.map文件
  productionSourceMap: false,
  devServer: {
    proxy: 'http://localhost:4000'
  }
}
