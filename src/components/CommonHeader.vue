<template>
  <header>
    <div class="l-content">
      <!-- 调用完成之后绑定点击事件 -->
      <el-button plain icon="el-icon-edit" size="mini" @click="collapseMenu"> </el-button>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <!-- 使用v-if判断是否存在 -->
        <el-breadcrumb-item :to="current.path" v-if="current">{{ current.label }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="r-content">
      <el-dropdown>
        <span class="el-dropdown-link"><img :src="userImg" alt="" class="user" /> </span>
        <el-dropdown-menu slot="dropdown" size="mini">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <!-- 当组件没有提供原有事件，又想使用vue中的方法时，需要使用native -->
          <el-dropdown-item @click.native="logOut">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
// store里面的api
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      current: (state) => state.tab.currentMenu,
    }),
  },
  data() {
    return {
      userImg: require('../assets/image/1.jpg'),
    }
  },
  methods: {
    collapseMenu() {
      this.$store.commit('collapseMenu')
    },
    logOut() {
      this.$store.commit('clearToken')
      this.$store.commit('clearMenu')
      location.reload()
    },
  },
}
</script>

<style lang="scss" scoped>
header {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.l-content {
  width: 180px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .el-button {
    margin-right: 20px;
  }
}

.r-content {
  .user {
    height: 54px;
    width: 54px;
    border-radius: 50%;
  }
}
</style>

<style lang="scss">
.el-breadcrumb__item {
  .el-breadcrumb__inner {
    color: #666;
    font-weight: normal;
  }
  &:last-child {
    .el-breadcrumb__inner {
      color: #fff;
    }
  }
}
</style>
