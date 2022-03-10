import { createApp } from 'vue'
import App from './App.vue'
import { globalRegister } from './global'
import 'normalize.css'

import router from './router'
import store from './store'

// import xxRequest from './service/index';

const app = createApp(App)

app.use(globalRegister)
app.use(router)
app.use(store)

app.mount('#app')
