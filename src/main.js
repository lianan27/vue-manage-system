import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 全局配置 必须在element样式之前才能覆盖掉element的样式
import '@/assets/scss/reset.scss'
import http from '@/api/config'
import './mock'

// 第三方包
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
// 挂载在vue的原型上面
Vue.prototype.$http = http

Vue.config.productionTip = false

// 在这里添加路由拦截,在跳转完成之后要手动调用next路由钩子，否则路由会不动然后处于加载状态
// router.beforeEach((to, from, next) => {
//   store.commit('getToken')
//   let token = store.state.user.token
//   // 判断进入的路由不是登录页
//   if (!token && to.name !== 'login') {
//     next({ name: 'login' })
//   } else {
//     next()
//   }
// })

new Vue({
  router,
  store,
  render: (h) => h(App),
  created() {
    store.commit('addMenu', router)
  },
}).$mount('#app')
