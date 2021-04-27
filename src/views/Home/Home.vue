<template>
  <el-row class="home"> home </el-row>
</template>

<script>
export default {
  mounted() {
    this.$http.get('/home/getData').then((res) => {
      console.log(res.data)
    })
  },
}
</script>

<style lang="scss" scoped>
// 引入scss文件
@import '~@/assets/scss/home';
</style>
