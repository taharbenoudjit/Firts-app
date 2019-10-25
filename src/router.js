import Vue from 'vue'
import Router from 'vue-router'
import Back from '@/components/Back'
import menuBack from '@/components/menuBack'
import login from '@/components/login'
import end from '@/components/end'

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
    },

    {
      path: '/end',
      name: 'end' ,
      component: end,
    }

  ]
})
