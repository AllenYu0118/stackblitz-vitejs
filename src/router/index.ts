import { createRouter, createWebHistory } from "vue-router"

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/use-element-visibility-bug', component: () => import('@/views/UseElementVisibilityBug.vue') },
  ],
})