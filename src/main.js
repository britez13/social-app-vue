import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import { router } from './router'
import './axios.config'
import App from './App.vue'
import './style.css'

const pinia = createPinia()
pinia.use(({ store }) => {
  store.router = markRaw(router);
});
const app = createApp(App)

app.use(pinia)
app.use(router)
app.mount('#app')
