import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Welcome from '../views/Welcome.vue'

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: () => import(/* webpackChunkName: "welcome" */ '../views/Welcome.vue')
  },
  {
    path: '/sign-in',
    name: 'SignIn',
    component: () => import(/* webpackChunkName: "signIn" */ '../views/SignIn.vue')
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: () => import(/* webpackChunkName: "signUp" */ '../views/SignUp.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
