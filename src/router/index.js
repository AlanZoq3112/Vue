import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/formulario',
      name: 'formlario',
      component: () => import('../views/Form.vue')
    },
    {
      path: '/pagination',
      name: 'pagination',
      component: () => import('../views/Pagination.vue')
    },
  ]
})

export default router
