import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import routes from '~pages';
import app from './app.vue';
import './global.css';

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

createApp(app).use(router).mount('#app')
