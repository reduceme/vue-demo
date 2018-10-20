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
        prop="incometype"
        label="收支类型">
      </el-table-column>
      <el-table-column
        prop="integral"
        label="积分数量">
      </el-table-column>
      <el-table-column
        prop="recharge"
        label="剩余积分">
      </el-table-column>
      <el-table-column
        prop="incomeThing"
        label="收支事宜">
      </el-table-column>
      <el-table-column
        prop="valid"
        label="变动时间">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'integral-search-list',
  props: ['tableData'],
  data () {
    return {}
  },
  methods: {}
}
</script>

<style scoped></style>
