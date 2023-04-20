// 1.区分开发环境和生产环境
// export const BASE_URL = 'http://coderwhy.dev:8000'
// export const BASE_URL = 'http://codercba.prod:8000'

// 2.代码逻辑判断, 判断当前环境
// vite默认提供的环境变量
// console.log(import.meta.env.MODE)
// console.log(import.meta.env.DEV) // 是否开发环境
// console.log(import.meta.env.PROD) // 是否生产环境
// console.log(import.meta.env.SSR) // 是否是服务器端渲染(server side render)

// let BASE_URL = ''
// if (import.meta.env.PROD) {
//   // 生产环境
//   BASE_URL =
//     'https://www.fastmock.site/mock/a284f10a88e25e38f3941644b118e775/api'
// } else {
//   // 开发环境
//   BASE_URL =
//     'https://www.fastmock.site/mock/a284f10a88e25e38f3941644b118e775/api'
// }

let BASE_URL = ''
if (import.meta.env.PROD) {
  // 生产环境
  BASE_URL = 'http://123.207.32.32:5000'
} else {
  // 开发环境
  BASE_URL = 'http://123.207.32.32:5000'
}

// codermie
// let BASE_URL = ''
// if (import.meta.env.PROD) {
//   // 生产环境
//   BASE_URL = 'http://111.230.245:8880'
// } else {
//   // 开发环境
//   BASE_URL = 'http://111.230.245:8880'
// }

// fastmock
// let BASE_URL = ''
// if (import.meta.env.PROD) {
//   // 生产环境
//   BASE_URL =
//     'https://www.fastmock.site/mock/a284f10a88e25e38f3941644b118e775/api'
// } else {
//   // 开发环境
//   BASE_URL =
//     'https://www.fastmock.site/mock/a284f10a88e25e38f3941644b118e775/api'
// }

// console.log(BASE_URL)

// 3.通过创建.env文件直接创建变量
// console.log(import.meta.env.VITE_URL)

export const TIME_OUT = 10000
export { BASE_URL }
