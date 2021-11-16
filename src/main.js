import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/sass/jumpa.sass'
import './assets/tailwind.css'

createApp(App).use(store).use(router).mount('#app')
