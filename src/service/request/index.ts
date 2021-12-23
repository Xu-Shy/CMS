import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import type { XXRequestInterceptors, XXRequestConfig } from './type'

class XXRequest {
  instance: AxiosInstance
  interceptors?: XXRequestInterceptors

  constructor(config: XXRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors

    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )

    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
  }
  request(config: AxiosRequestConfig): void {
    this.instance.request(config).then((res) => {
      console.log(res)
    })
  }
  // get() {}
}

export default XXRequest
