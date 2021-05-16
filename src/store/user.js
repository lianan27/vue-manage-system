import Cookie from 'js-cookie'
export default {
  state: {
    token: '',
  },
  mutations: {
    setToken(state, val) {
      state.token = val
      Cookie.set('token', val)
    },
    // 清除token
    clearToken(state) {
      state.token = ''
      Cookie.remove('token')
    },
    // 刷新的时候vuex中的token会丢失，所以需要重新获取token
    getToken(state) {
      state.token = Cookie.get('token')
    },
  },
  actions: {},
}
