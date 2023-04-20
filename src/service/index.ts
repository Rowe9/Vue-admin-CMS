import { LOGIN_TOKEN } from '@/global/constants'
import { localCache } from '@/utils/cache'
import { BASE_URL, TIME_OUT } from './config'
import HYRequest from './request'

const hyRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestSuccessFn: (config) => {
      // 每一个请求都自动携带token
      const token = localCache.getCache(LOGIN_TOKEN)
      if (config.headers && token) {
        // 类型缩小
        config.headers.Authorization = 'Bearer ' + token
      }
      return config
    }
  }
})

export const Request = new HYRequest({
  baseURL:
    // 'https://www.fastmock.site/mock/a284f10a88e2z5e38f3941644b118e775/api'
    // baseURL: 'http://111.230.245:8880
    'http://123.207.32.32:5000'
})

export default hyRequest
