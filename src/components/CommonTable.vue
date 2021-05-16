<template>
  <div class="common-table">
    <!-- 数据要传进来,添加加载状态v-loading -->
    <el-table :data="tableData" height="90%" stripe v-loading="config.loading">
      <el-table-column label="序号" width="85">
        <template slot-scope="scope">
          <!-- 内部的序号的一个属性 $index -->
          <span style="margin-left: 10px">{{ (config.page - 1) * 20 + scope.$index + 1 }}</span>
        </template>
      </el-table-column>
      <el-table-column show-overflow-tooltip stripe v-for="item in tableLabel" :key="item.prop" :label="item.label" :width="item.width ? item.width : 125">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row[item.prop] }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="180">
        <template slot-scope="scope">
          <!-- scope是内部封装的变量，通过scope可以调用 -->
          <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 组件内部更新要同步到父组件，所以加上sync -->
    <el-pagination class="pager" layout="prev, pager, next" :total="config.total" :current-page.sync="config.page" @current-change="changePage">
    </el-pagination>
  </div>
</template>

<script>
export default {
  // 定义两个prop来接收它
  props: {
    // 不设置类型就用了array
    tableData: Array,
    tableLabel: Array,
    // 用来接受配置
    config: Object,
  },
  methods: {
    // 编辑功能
    handleEdit(row) {
      this.$emit('edit', row)
    },
    handleDelete(row) {
      this.$emit('del', row)
    },
    changePage(page) {
      this.$emit('changePage', page)
    },
  },
}
</script>

<style lang="scss" scoped>
.common-table {
  // calc是css3的属性
  height: calc(100% - 70px);
  background-color: #fff;
  position: relative;
  .pager {
    position: absolute;
    bottom: 0px;
    right: 20px;
  }
}
</style>
