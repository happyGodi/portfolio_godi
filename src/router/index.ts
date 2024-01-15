import { createRouter, createWebHistory } from 'vue-router'
import HomeViewVue from '../views/HomeView.vue'
import PresentationVue from '@/components/Presentation.vue'
import GalleryVue from '@/components/Gallery.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeViewVue,
      children: [
        {
          path: '',
          name: 'presentation',
          component: PresentationVue
        },
        { 
          path: 'gallery',
          name: 'gallery',
          component: GalleryVue
        }
      ] 
    },
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
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
