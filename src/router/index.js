import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import public1 from './public'
import management from './management'
Vue.use(Router)
const Routes = public1.concat(management)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../components/Login.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../components/Home.vue'),
      children: Routes
    }
  ]
})
router.beforeEach((to, from, next) => {
  let token = localStorage.token
  if (token) {
    if (to.path == '/login') {
      next({path:from.path})
      return
    }
    next()
  } else {
    if (to.path !== '/login') {
      if (to.path == '/') {
        next()
      } else {
        next({ path: '/login' })
      }
    } else {
      next()
    }
  }
})
export default router