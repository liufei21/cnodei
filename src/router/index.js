import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Detail from '@/components/detail'
import Login from '@/components/login'
import Release from '@/components/release'
import userDetail from '@/components/userDetail'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/detail/:id?',
      name: 'detail',
      component: Detail
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/release/:id?',
      name: 'release',
      component: Release
    },
    {
      path: '/userDetail/:id?',
      name: 'userDetail',
      component: userDetail
    }
  ]
})
