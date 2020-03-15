<template>
  <div id="app">
    <TableComponent :index="true" border :table-head="tableHead" :table-data="tableData" @selection-change="handleSelectionChange">
       <!-- 自定义列 操作 -->
        <el-table-column slot="opera" slot-scope="headScope" width="100px" class-name="el-table-column-opera" fixed="right" align="center" :label="headScope.head.label">
          <template slot-scope="scope">
            <el-button type="text" title="编辑" @click="edit(scope.row)"><i class="el-icon-edit" /></el-button>
          </template>
        </el-table-column>
    </TableComponent>
  </div>
</template>

<script>
import TableComponent from '../packages/table-component'

export default {
  name: 'App',
  components: {
    TableComponent
  },
  data () {
    return {
      tableHead: [
        {
          label: '标题',
          prop: 'title'
        },
        {
          label: '状态',
          prop: 'status'
        },
        {
          label: '操作',
          prop: 'opera',
          isSlot: true
        }
      ],
      tableData: [
        {
          title: '标题1',
          date: '日期1',
          status: 0
        },
        {
          title: '标题2',
          date: '日期2',
          status: 1
        },
        {
          title: '标题3',
          date: '日期3',
          status: 2
        }
      ]
    }
  },
  methods: {
    edit(row) {
      console.log(row)
    },
    handleSelectionChange(rows) {
      console.log(rows)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
