import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/program'
    },
    {
      path: '/news-events',
      name: 'news-events',
      component: () => import('../views/NewsEventsView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/program',
      name: 'program',
      component: () => import('../views/ProgramView.vue')
    },
    {
      path: '/diploma',
      name: 'diploma',
      component: () => import('../views/DiplomaView.vue')
    }
  ],
})

export default router
