import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory} from 'vue-router'
import VideoView from './views/VideoView.vue'
// import aboutMe from './components/aboutMe.vue'
import HomeView from './views/HomeView.vue'

const routes = [
    {
        name: "VideoView",
        path: "/VideoView",
        component: VideoView 
    },

    {
        name: "home",
        path: "/",
        component: HomeView
    }
];


const router = createRouter({
    history: createWebHistory(),
    routes
})
createApp(App).use(router).mount('#app')
