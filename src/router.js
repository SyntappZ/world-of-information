import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Search',
      name: 'search',
     
      component: () => import('./views/Search.vue')
    },
    {
      path: '/Contact',
      name: 'contact',
      component: () => import('./views/Contact.vue')
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    if(savedPosition) {
      return savedPosition;

    }else{
      return {x: 0, y: 0}
    }
  }
})
