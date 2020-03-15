// 名称：表格-模板
// 版本：0.1.0
// 作者：lsz
// 时间：2020年03月13日 17:26:21

// 参数
// tableHead
//   label
//   prop:
//   width:
//   isSlot: 是否插槽 true
//   component: 公用组件
// tableData

<template>
  <div class="ins-table">
    <!-- ins-table -->
    <el-table
      :data="tableData"
      v-bind="$attrs"
      :max-height="height"
      :empty-text="emptyText"
      class="el-table-xhxz"
      v-on="$listeners"
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        v-if="selection"
        type="selection"
        width="50"
        align="center"
      />
      <el-table-column
        v-if="index&&!isIndexWidthAuto"
        type="index"
        width="50"
        label="序号"
        :align="align"
      />
      <el-table-column
        v-if="index&&isIndexWidthAuto"
        label="序号"
        :align="align"
      >
        <template slot-scope="scope">
          {{ scope.$index+1 }}
        </template>
      </el-table-column>
      <template v-for="(head,ind) in tableHead">
        <!-- 自定义列 插槽 -->
        <slot
          v-if="head.isSlot===true"
          :name="head.prop"
          :head="head"
        />
        <!-- 自定义列 公用 -->
        <component
          :is="head.component"
          v-else-if="head.component"
          :key="`ins-table${ind}`"
          :head="head"
        />
        <!-- 默认列 -->
        <el-table-column
          v-else
          :key="`ins-table${ind}`"
          :label="head.label"
          :prop="head.prop"
          :width="head.width"
          :align="align"
        >
          <template slot-scope="scope">
            {{ scope.row[head.prop] || scope.row[head.prop]===0? scope.row[head.prop]: '-' }}
          </template>
        </el-table-column>
      </template>

    </el-table>
  </div>
</template>
<script>
export default {
  name: 'TableComponent',
  components: {},
  props: {
    tableHead: { type: Array, default: null, required: true },
    tableData: { type: Array, default: null, required: true },
    align: { type: String, default: 'center' },
    selection: { type: Boolean, default: false },
    index: { type: Boolean, default: false },
    emptyText: { type: String, default: '暂无数据' },
    isAutoHeight: { type: Boolean, default: false },
    height: { type: Number, default: null },
    isIndexWidthAuto: { type: Boolean, default: false }
  },
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {
  },
  mounted() {
    this.init()
  },
  methods: {
    init() { },
    async fetchData() { },
    render() { },
    handleSelectionChange(rows) {
      this.$emit('selection-change', rows)
    }
  }
}
</script>
<style lang="scss">
.ins-table {
  font-size: inherit;

  .el-table-column-opera {
    .el-button {
      i {
        font-size: 14px;
      }
    }
  }
}
</style>
