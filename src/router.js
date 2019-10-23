import Vue from 'vue'
import Router from 'vue-router'
import Back from '@/components/Back'
import menuBack from '@/components/menuBack'
import login from '@/components/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Back',
      component: Back
    },
    {
      path: '/menu',
      name: 'menuBack',
      component: menuBack
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }

  ]
})
