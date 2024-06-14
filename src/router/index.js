import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/template',
      name: 'template',
      component: () => import('../views/TempView.vue')
    },
    {
      path: '/reactivity',
      name: 'reactivity',
      component: () => import('../views/ReactView.vue')
    },
    {
      path: '/computed',
      name: 'computed',
      component: () => import('../views/ComputedView.vue')
    },
    {
      path: '/stylebind',
      name: 'stylebind',
      component: () => import('../views/StyleView.vue')
    },
    {
      path: '/condition',
      name: 'condition',
      component: () => import('../views/ConditionView.vue')
    },
    {
      path: '/list_render',
      name: 'list_render',
      component: () => import('../views/ListView.vue')
    },
    {
      path: '/event',
      name: 'event',
      component: () => import('../views/EventView.vue')
    },
    {
      path: '/form_bind',
      name: 'form_bind',
      component: () => import('../views/FormBindView.vue')
    },
    {
      path: '/lifecycle',
      name: 'lifecycle',
      component: () => import('../views/LifeCycleView.vue')
    },
    {
      path: '/watch',
      name: 'watch',
      component: () => import('../views/WatchView.vue')
    },
  ]
})

export default router
