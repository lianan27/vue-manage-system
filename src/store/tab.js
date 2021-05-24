import Cookie from 'js-cookie'
export default {
  state: {
    isCollapse: false,
    menu: [],
    currentMenu: null,
    tabsList: [
      // 默认值
      {
        path: '/',
        label: '首页',
        name: 'home',
        icon: 'home',
      },
    ],
  },
  mutations: {
    // 登入
    setMenu(state, val) {
      state.menu = val
      // 存字符串，字符串的序列化
      Cookie.set('menu', JSON.stringify(val))
      console.log(val, 'vuex')
    },
    // 退出登录，清除掉cookie里边的数据
    clearMenu(state) {
      state.menu = []
      Cookie.remove('menu')
    },
    addMenu(state, router) {
      var menu = JSON.parse(Cookie.get('menu'))
      if (!menu) return
      state.menu = menu
      // 添加动态路由的数组
      let currentMenu = [
        {
          path: '/',
          component: () => import(`@/views/Main.vue`),
          children: [],
        },
      ]
      // 手动拼接函数
      menu.forEach((item) => {
        if (item.children) {
          item.children = item.children.map((item) => {
            // ES6模板字符串：${}表示变量
            item.component = () => import(`@/views/${item.url}`)
            return item
          })
          currentMenu[0].children.push(...item.children)
        } else {
          item.component = () => import(`@/views/${item.url}`)
          currentMenu[0].children.push(item)
        }
      })
      console.log(currentMenu, 'cur')
      // router.addRoutes(currentMenu)
      for (let i = 0, length = currentMenu.length; i < length; i += 1) {
        const element = currentMenu[i]
        router.addRoute(element)
      }
    },
    SelectMenu(state, val) {
      if (val.name !== 'home') {
        state.currentMenu = val
        // 去重，选择菜单
        let result = state.tabsList.findIndex((item) => item.name === val.name)
        // 为-1的时候是没有找到，就放进来，否则不进行任何操作
        result === -1 ? state.tabsList.push(val) : ''
        state.tabsList.push(val)
      } else {
        state.currentMenu = null
      }
    },

    closeTab(state, val) {
      // 找到需要删除的菜单的索引，进行删除
      let result = state.tabsList.findIndex((item) => item.name === val)
      // 删除一个项目
      state.tabsList.splice(result, 1)
    },
    // 只需要传入一个state就行，将state进行取反
    collapseMenu(state) {
      state.isCollapse = !state.isCollapse
    },
  },
  actions: {},
}
