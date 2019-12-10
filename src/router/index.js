import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import tasklist from '../views/tasklist'
import tasks from '../components/test1'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/tasklist',
    name: 'taskList',
    component: tasklist
  },
  {
    path: '/tasks',
    name: 'tasks',
    component: tasks
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
