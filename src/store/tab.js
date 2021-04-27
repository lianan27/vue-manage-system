export default {
  state: {
    isCollapse: false,
    menu: [],
    currentMenu: null,
    tabsList: [
      // 默认值
      {
        path: '/',
        name: 'home',
        label: '首页',
        icon: 'home',
      },
    ],
  },
  mutations: {
    SelectMenu(state, val) {
      // val.name === "home" ? (state.currentMenu = null) : (state.currentMenu = val)
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
      let result = state.tabsList.findIndex((item) => item.name === val.name)
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
