import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '../components/Landing.vue'
import Information from '../components/Information.vue'
import Result from '../components/Result.vue'
import Binding from '../components/Binding.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'landing',
    component: Landing
  },
  {
    path: '/information',
    name: 'information',
    component: Information
  },
  {
    path: '/result',
    name: 'result',
    component: Result
  },
  {
    path: '/binding',
    name: 'binding',
    component: Binding
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
