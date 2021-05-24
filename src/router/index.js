import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login/Login'),
  },
]

const router = new VueRouter({
  routes,
})
router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()

  var tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})
export default router
