import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory} from 'vue-router'
import VideoView from './views/VideoView.vue'

const routes = [
    {
        name: "VideoView",
        path: "/VideoView",
        component: VideoView 
    },

    {
        name: "App",
        path: "/",
        component: App
    }
];


const router = createRouter({
    history: createWebHistory(),
    routes
})
createApp(App).use(router).mount('#app')
