import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Plugin } from 'vue-responsive-video-background-player'

createApp(App).use(router).use(Plugin).mount('#app')
