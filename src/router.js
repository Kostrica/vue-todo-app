import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/views/Home';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: Home
    }, 
    {
      path: '/todos',
      component: () => import('./views/Todos.vue')
    }
  ]
});

export default router;
