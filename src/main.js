import { createApp } from 'vue'
import store from './stores/store.js'
import App from './App.vue'
import router from './router'
import Datepicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import vue3GoogleLogin from 'vue3-google-login'

import './assets/main.scss'

const app = createApp(App)
app.component('Datepicker', Datepicker);

app.use(store)
app.use(router)
app.use(vue3GoogleLogin, {
    clientId: '118031433255-rel2t5ijugfov3pqv4ptriaegl1eo1mb.apps.googleusercontent.com',
    scope: 'email profile openid',
    prompt: 'consent'
  })

app.mount('#app')
