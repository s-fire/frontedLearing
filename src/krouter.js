import Home from '@/views/Home';
import About from '@/views/About';
import VueRouter from './kvue-router';
import Vue from 'vue'
Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        { path: '/', component: Home },
        { path: '/about', component: About },
    ]
})
