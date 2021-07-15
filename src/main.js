import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueAxios from 'vue-axios'
import Axios from './common/request'
Axios.defaults.baseURL = Object.is(process.env.NODE_ENV, 'production') ? '' : 'api/'

Vue.use(VueAxios, Axios)
export const routes = [
    { path: '/',activePage:1, component: () => import('./components/views/mainPage.vue') },
    { path: '/index',activePage:1, component: () => import('./components/views/mainPage.vue') },
    { path: '/about',activePage:2, component: () => import('./components/views/about.vue') },
    { path: '/enlightenment/video',activePage:3, component: () => import('./components/views/enlightenment.vue') },
    { path: '/enlightenment/voice',activePage:3, component: () => import('./components/views/voice.vue') },
    { path: '/enlightenment/image',activePage:3, component: () => import('./components/views/image.vue') },
    { path: '/enlightenment/article',activePage:3, component: () => import('./components/views/blog.vue') },
    { path: '/contact',activePage:6, component: () => import('./components/views/contact') },
    { path: '/singleVideo',activePage:3, component: () => import('./components/views/singleVideo.vue') },
    { path: '/singleVoice',activePage:3, component: () => import('./components/views/singleVoice') },
    { path: '/singlearticle',activePage:3, component: () => import('./components/views/singleBlog.vue') },
]
const router = new VueRouter({
    routes
})

Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
