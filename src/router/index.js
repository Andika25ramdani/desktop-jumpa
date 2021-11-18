import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/pages/Home.vue'
import HostMeeting from '../views/log/HostMeeting.vue'
import JoinMeeting from '../views/log/JoinMeeting.vue'
import SignIn from '../views/log/SignIn.vue'
import SignUp from '../views/log/SignUp.vue'
import Welcome from '../views/log/Welcome.vue'

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome
  },
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/sign-in',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/join-meeting',
    name: 'JoinMeeting',
    component: JoinMeeting
  },
  {
    path: '/host-meeting',
    name: 'HostMeeting',
    component: HostMeeting
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
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
