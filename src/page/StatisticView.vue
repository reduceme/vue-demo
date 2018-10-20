<template>
  <div>
    <member-search-bar @click="searchBar" ref="searchChild" :pageInfo="pageInfo" @changeSearchData="searchBar($event)"></member-search-bar>
    <member-search-list :tableData="tableListInfo.tableData"></member-search-list>
    <pagination ref="pageChild" :pageInfo="pageInfo" :total="tableListInfo.total" @handleSizeChange="paginationSizeChange($event)" @handleCurrentChange="paginationCurrentChange($event)"></pagination>
  </div>
</template>

<script>
import MemberSearchBar from '../components/MemberSearchBar'
import MemberSearchList from '../components/MemberSearchList'
import Pagination from '../components/Pagination'

export default {
  name: 'statistic-view',
  components: { MemberSearchBar, MemberSearchList, Pagination },
  data () {
    return {
      /* *
      * 查询条件
      * */
      pageInfo: {
        pageSize: 20,
        currentPage: 1,
        memberName: '',
        phoneNumber: '',
        memberStatus: '1'
      },
      /* *
      * 从后台获取的数据赋值
      * */
      tableListInfo: {
        total: 200,
        tableData: [{
          id: '123456',
          memberName: '北京公路建设有限公司',
          companyName: '北京公路建设有限公司',
          phoneNumber: '13511111111',
          companyPhoneNumber: '13511111111',
          eMail: '123456@qq.com',
          isVIP: 1,
          recharge: 100,
          valid: 1,
          date: '2018-10-15'
        }, {
          id: '123456',
          memberName: '北京公路建设有限公司',
          companyName: '北京公路建设有限公司',
          phoneNumber: '13511111111',
          companyPhoneNumber: '13511111111',
          eMail: '123456@qq.com',
          isVIP: 1,
          recharge: 100,
          valid: 1,
          date: '2018-10-15'
        }, {
          id: '123456',
          memberName: '北京公路建设有限公司',
          companyName: '北京公路建设有限公司',
          phoneNumber: '13511111111',
          companyPhoneNumber: '13511111111',
          eMail: '123456@qq.com',
          isVIP: 1,
          recharge: 100,
          valid: 1,
          date: '2018-10-15'
        }, {
          id: '123456',
          memberName: '北京公路建设有限公司',
          companyName: '北京公路建设有限公司',
          phoneNumber: '13511111111',
          companyPhoneNumber: '13511111111',
          eMail: '123456@qq.com',
          isVIP: 1,
          recharge: 100,
          valid: 1,
          date: '2018-10-15'
        }]
      },
      username: 'test'
    }
  },
  methods: {
    /* *
    * 获取头部搜索条件
    * */
    searchBar: function (val) {
      this.pageInfo.memberName = val.memberName
      this.pageInfo.phoneNumber = val.phoneNumber
      this.pageInfo.memberStatus = val.memberStatus
      console.log(this.pageInfo)
    },
    /* *
    * 分页大小改变
    * */
    paginationSizeChange: function (val) {
      this.pageInfo.pageSize = val
      console.log(this.pageInfo)
    },
    /* *
    * 页码改变
    * */
    paginationCurrentChange: function (val) {
      this.pageInfo.currentPage = val
      console.log(this.pageInfo)
    }
    /* *
    * axios方法，根据查询条件，请求后台数据
    * */
  }
}
</script>

<style scoped>
.el-dialog__header {
  background: #4286DC;
}
</style>
