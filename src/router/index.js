import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index/index'
import Login from '@/page/login/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
