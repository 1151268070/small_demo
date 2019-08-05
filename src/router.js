import Vue from 'vue'
import Router from 'vue-router'
import Sum from './views/sum.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Sum,
      redirect: '/sum/home'
    },
    {
      path: '/sum',
      component: Sum,
      children: [
        {
          path: '/sum/home',
          name: 'home',
          component: () => import('./views/home')
        },
        {
          path: '/sum/apps',
          name: 'apps',
          component: () => import('./views/apps')
        },
        {
          path: '/sum/cart',
          name: 'cart',
          meta: { requireAuth: true },
          component: () => import('./views/cart')
        },
        {
          path: '/sum/contact',
          name: 'contact',
          component: () => import('./views/contact')
        },
      ]
    },
    {
      path: '/search/:kw',
      name: 'search',
      component: () => import('./views/pages/search')
    },
    {
      path: '/product_details:/lid',
      name: 'product_details',
      component: () => import ('./views/pages/product_details') 
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/login')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/register')
    },
    {
      path: '/address',
      name: 'address',
      component: () => import('./views/pages/address')
    },
    {
      path: '/setAddress/:sid',
      name: 'setAddress',
      component: () => import('./views/pages/setAddress')
    },
    {
      path: '/confim',
      name: 'confim',
      component: () => import('./views/pages/confim')
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('./views/pages/order')
    },
    {
      path: '/orderDetail',
      name: 'orderDetail',
      component: () => import('./views/pages/orderDetail')
    }
  ]
})
