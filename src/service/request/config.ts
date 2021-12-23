let BASE_URL = ''
let TIME_OUT = 1000

if (process.env.NODE_ENV === 'development') {
  BASE_URL = ''
  TIME_OUT = 1000
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = ''
  TIME_OUT = 20000
} else {
  BASE_URL = ''
  TIME_OUT = 3000
}

export { BASE_URL, TIME_OUT }
