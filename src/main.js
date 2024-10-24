import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import HomeCmp from '@/components/HomeCmp.vue';
import AboutCmp from '@/components/AboutCmp.vue';
import RegisterCmp from '@/components/RegisterCmp.vue';
import LoginCmp from '@/components/LoginCmp.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomeCmp },   
        { path: '/about', component: AboutCmp },
        { path: '/register', component: RegisterCmp },  
        { path: '/login', component: LoginCmp },    
    ],
});

const app = createApp(App);
app.use(router);
app.mount('#app');
