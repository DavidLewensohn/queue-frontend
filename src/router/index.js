import { createRouter, createWebHistory } from 'vue-router'
import homeView from '../views/homeView.vue'
import hostEdit from '../views/hostEdit.vue'
import hostView from '../views/hostView.vue'
import queuerView from '../views/queuerView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: homeView
    },
    {
      path: '/host',
      name: 'host',
      component: hostView
    },
    {
      path: '/queuer',
      name: 'queuer',
      component: queuerView
    },
    {
      path: '/host-edit/:hostId?',
      name: 'host-edit',
      component: hostEdit
    }
  ]
})

export default router
