import { createApp } from 'vue'
import './assets/tokens.css'
import './style.css'
import App from './App.vue'
import router from './router/index.js'
import { i18n } from './i18n.js'

const app = createApp(App)

app.config.errorHandler = (err, _instance, info) => {
  console.error('[Vue error]', info, err)
}

app.use(router)
app.use(i18n)
app.mount('#app')
