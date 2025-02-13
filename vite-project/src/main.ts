import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './pages/router'
// destucturing => { } on recup ce on on a besoin




createApp(App).use(router).mount('#app')
