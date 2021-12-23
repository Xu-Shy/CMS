import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface XXRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (config: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (error: any) => any
}

export interface XXRequestConfig extends AxiosRequestConfig {
  interceptors?: XXRequestInterceptors
}
