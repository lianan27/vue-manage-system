import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 全局配置 必须在element样式之前才能覆盖掉element的样式
import '@/assets/scss/reset.scss'
import 'element-ui/lib/theme-chalk/index.css'
import http from '@/api/config'
import './mock'

// 第三方包
import ElementUI from 'element-ui'

Vue.use(ElementUI)
// 挂载在vue的原型上面
Vue.prototype.$http = http

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
