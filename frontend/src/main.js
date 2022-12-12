import { createApp } from 'vue'
import App from './App.vue'
import Bubbles from './Bubbles.vue'
import router from './router'

//import alertify from "alertifyjs"

createApp(App).use(router).mount('#app')
createApp(Bubbles).use(router).mount('#bubbles')