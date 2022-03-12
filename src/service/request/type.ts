import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface XXRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

export interface XXRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: XXRequestInterceptors<T>
  showLoading?: boolean
}
