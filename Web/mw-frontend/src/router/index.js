import Vue from 'vue'
import VueRouter from 'vue-router'
import i18n from '../i18n'

import Home from '../views/Home.vue'
import ErrorPage from '../views/Error.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect: `/${i18n.locale}`
  },
  {
    path: '/:lang',
    component: {
      render(c) { return c('router-view')}
    },
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('../views/About.vue')
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import('../views/Login.vue')
      },
      {
        path: '*',
        name: 'Error',
        component: ErrorPage
      }
    ]
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
