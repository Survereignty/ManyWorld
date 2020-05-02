import Vue from 'vue'
import VueRouter from 'vue-router'
import i18n from '../i18n'

import AuthGuard from './auth-guard'
import AdminGuard from './admin-guard'

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
                component: () => import('../views/Showcase.vue'),
                props: true,
                beforeEnter: AuthGuard,
            },
            {
                path: 'admin',
                name: 'Admin',
                component: () => import('../views/Admin.vue'),
                beforeEnter: AdminGuard,
                children: [
                    {
                        path: ':id',
                        name: 'Settings',
                    }
                ]
            },
            {
                path: 'create',
                name: 'Create',
                component: () => import('../views/Create.vue'),
                beforeEnter: AuthGuard
            },
            {
                path: 'gallery',
                name: 'Gallery',
                component: () => import('../views/Gallery.vue'),
                beforeEnter: AuthGuard
            },
            {
                path: 'login',
                name: 'Login',
                component: () => import('../views/Login.vue'),
            },
            {
                path: ':id',
                name: 'Showcase',
                props: true,
                component: () => import('../views/Showcase.vue'),
                beforeEnter: AuthGuard,
            }
        ]
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
