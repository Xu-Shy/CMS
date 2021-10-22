import axios from 'axios'

axios.defaults.baseURL = 'https://httpbin.org'
axios.defaults.timeout = 10000
// axios.defaults.headers = {}

axios
  .get('/get', {
    params: {
      name: 'xia',
      password: 'test'
    }
  })
  .then((res) => {
    console.log(res.data)
  })

axios
  .post('/post', {
    data: {
      name: 'xia',
      password: 'test123'
    }
  })
  .then((res) => {
    console.log(res)
  })

axios.interceptors.request.use()
axios.interceptors.response.use()
