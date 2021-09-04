import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '../views/Landing'
import InformationCont from '../views/informationCont'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/informationCont',
    name: 'InformationCont',
    component: InformationCont
  },

  {
    path: '/information',
    name: 'Information',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Information.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
