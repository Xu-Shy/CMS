import XXRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

const xxRequest = new XXRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})

export default xxRequest
