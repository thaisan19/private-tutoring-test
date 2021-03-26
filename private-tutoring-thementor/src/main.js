import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'animate.css'

import './assets/main.css'

import MainButton from './components/main-components/MainButton.vue'

const app = createApp(App)

app.use(store)
app.use(router)

app.component('main-button', MainButton)

app.mount('#app')
