<template>
  <div class="manage">
    <!-- 根据选择操作的不同显示新增还是更新 -->
    <el-dialog :title="operateType === 'add' ? '新增用户' : '编辑用户'" :visible.sync="isShow">
      <common-form inline :formLabel="operateFormLabel" :form="searchForm"></common-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isShow = false">取 消</el-button>
        <el-button type="primary" @click="confirm">确 定</el-button>
      </div>
    </el-dialog>
    <div class="manage-header">
      <el-button type="primary">+ 新增</el-button>
      <common-form inline :formLabel="formLabel" :form="searchForm">
        <el-button type="primary">搜索</el-button>
      </common-form>
    </div>

    <!-- 不用外层div，好用百分比设置高度 -->
    <common-table :tableData="tableData" :tableLabel="tableLabel" :config="config" @changePage="getList" @edit="editUser" @del="delUser"></common-table>
  </div>
</template>

<script>
import CommonForm from '../../components/CommonForm.vue'
import CommonTable from '../../components/CommonTable.vue'
export default {
  components: {
    CommonTable,
    CommonForm,
  },
  data() {
    return {
      operateType: 'add',
      isShow: false,
      tableData: [],
      tableLabel: [
        {
          prop: 'name',
          label: '姓名',
        },
        {
          prop: 'age',
          label: '年龄',
        },
        // 性别返回的是0或1，所以需要自定义字段来转译
        {
          prop: 'sexLabel',
          label: '姓别',
        },
        {
          prop: 'birth',
          label: '出生日期',
          width: 200,
        },
        {
          prop: 'addr',
          label: '地址',
          width: 320,
        },
      ],
      config: {
        page: 1,
        total: 30,
        loading: false,
      },
      operateForm: {
        // 这里都是字段，不过默认是空
        name: '',
        addr: '',
        age: '',
        birth: '',
        sex: '',
      },
      operateFormLabel: [
        {
          model: 'name',
          label: '姓名',
        },
        {
          model: 'age',
          label: '年龄',
        },
        {
          model: 'sex',
          label: '性别',
          type: 'select',
          opts: [
            {
              label: '男',
              value: 1,
            },
            {
              label: '女',
              value: 0,
            },
          ],
        },
        // 日期选择器，所以会设置成date
        {
          model: 'birth',
          label: '出生日期',
          type: 'date',
        },
        {
          model: 'addr',
          label: '地址',
        },
      ],
      searchForm: {
        keyword: '',
      },
      formLabel: [
        {
          model: 'keyword',
          label: '',
        },
      ],
    }
  },
  methods: {
    getList() {
      this.config.loading = true
      this.$http
        .get('/api/user/getUser', {
          params: {
            page: this.config.page,
          },
        })
        // 在then里边进行处理
        .then((res) => {
          this.tableData = res.data.list.map((item) => {
            item.sexLabel = item.sex === 0 ? '女' : '男'
            // 把item拼接成数组返回
            return item
          })
          this.config.total = res.data.count
          this.config.loading = false
        })
    },
    editUser(row) {
      this.operateType = 'edit'
      this.isShow = true
      console.log(row)
    },
    confirm() {
      if (this.operateType === 'edit') {
        // 传递的参数就是表单
        this.$http.post('/api/user/edit', this.operateForm).then((res) => {
          console.log(res.data)
          this.isShow = false
          this.getList()
        })
      }
    },
    delUser(row) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          let id = row.id
          this.$http
            .get('/api/user/del', {
              params: {
                id,
              },
            })
            .then((res) => {
              console.log(res.data)
              this.$message({
                type: 'success',
                message: '删除成功!',
              })
              this.getList()
            })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除',
          })
        })
    },
  },

  created() {
    this.getList()
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/common';
</style>
