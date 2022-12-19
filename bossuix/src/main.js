import { createApp } from 'vue'
import Bubbles from './Bubbles.vue'
import router from './router'

//import alertify from "alertifyjs"

createApp(Bubbles).use(router).mount('#bubbles')