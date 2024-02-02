import { createRouter, createWebHistory } from 'vue-router'
import HomeViewVue from '../views/HomeView.vue'
import PresentationVue from '@/components/Presentation.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeViewVue,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not found',
      redirect: to => {
        return '/'
      }
    }

  ]
})

export default router
