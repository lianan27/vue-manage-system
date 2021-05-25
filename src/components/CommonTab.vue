<template>
  <div class="tabs">
    <el-tag
      :key="tag.name"
      size="small"
      v-for="tag in tags"
      :closable="tag.name !== 'home'"
      :disable-transitions="false"
      @click="changeMenu(tag)"
      @close="handleClose(tag)"
      :effect="$route.name === tag.name ? 'dark' : 'plain'"
    >
      <!-- 文字描述 -->
      {{ tag.label }}
    </el-tag>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {
      dynamicTags: ['标签一', '标签二', '标签三'],
      inputVisible: false,
      inputValue: '',
    }
  },
  methods: {
    ...mapMutations({
      close: 'closeTab',
    }),
    //   只留下关闭的方法
    handleClose(tag) {
      this.close(tag)
    },
    changeMenu(item) {
      // 路由跳转
      this.$router.push({ name: item.name })
      this.$store.commit('SelectMenu', item)
    },
  },
  computed: {
    // 和计算属性进行合并
    ...mapState({
      tags: (state) => state.tab.tabsList,
    }),
  },
}
</script>

<style lang="scss" scoped>
.tabs {
  padding: 20px;
  .el-tag--small {
    margin-right: 15px;
    cursor: pointer;
  }
}
</style>
