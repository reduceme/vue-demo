<template>
  <div>
    <el-table
      :data="tableData"
      border
      stripe
      style="width: 100%">
      <el-table-column
        prop="id"
        label="用户ID"
        width="180">
      </el-table-column>
      <el-table-column
        prop="memberName"
        label="会员名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="phoneNumber"
        label="联系电话">
      </el-table-column>
      <el-table-column
        prop="memberType"
        label="用户类型">
      </el-table-column>
      <el-table-column
        prop="companyName"
        label="公司">
      </el-table-column>
      <el-table-column
        prop="searchWord"
        label="搜索词">
      </el-table-column>
      <el-table-column
        prop="resultAccount"
        label="结果数">
      </el-table-column>
      <el-table-column
        prop="date"
        label="时间">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'search-record-list',
  props: ['tableData'],
  data () {
    return {}
  },
  methods: {}
}
</script>

<style scoped></style>
