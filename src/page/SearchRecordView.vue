<template>
  <div>
    <search-record-bar @changeSearchData="changeSearchData($event)" :recordPageInfo="recordPageInfo"></search-record-bar>
    <search-record-list :tableData="tableListInfo.tableData"></search-record-list>
    <pagination ref="pageChild" :pageInfo="recordPageInfo" :total="tableListInfo.total" @handleSizeChange="paginationSizeChange($event)" @handleCurrentChange="paginationCurrentChange($event)"></pagination>
  </div>
</template>

<script>
import SearchRecordBar from '../components/SearchRecordBar'
import SearchRecordList from '../components/SearchRecordList'
import Pagination from '../components/Pagination'
export default {
  name: 'search-record-view',
  components: { SearchRecordBar, SearchRecordList, Pagination },
  data () {
    return {
      /* *
       * 查询条件
       * */
      recordPageInfo: {
        pageSize: 20,
        currentPage: 1,
        memberName: '',
        phoneNumber: '',
        memberType: '',
        companyName: '',
        resultCount: ''
      },
      /* *
       * 从后台获取的数据赋值
       * */
      tableListInfo: {
        total: 200,
        tableData: [{
          id: '123456',
          memberName: '李浩然',
          phoneNumber: '13511111111',
          memberType: '会员',
          companyName: '北京公路建设有限公司',
          searchWord: '汽车零件标准',
          resultAccount: '55',
          date: '2018-10-15 15:08'
        }, {
          id: '123456',
          memberName: '李浩然',
          phoneNumber: '13511111111',
          memberType: '会员',
          companyName: '北京公路建设有限公司',
          searchWord: '汽车零件标准',
          resultAccount: '55',
          date: '2018-10-15 15:08'
        }, {
          id: '123456',
          memberName: '李浩然',
          phoneNumber: '13511111111',
          memberType: '会员',
          companyName: '北京公路建设有限公司',
          searchWord: '汽车零件标准',
          resultAccount: '55',
          date: '2018-10-15 15:08'
        }, {
          id: '123456',
          memberName: '李浩然',
          phoneNumber: '13511111111',
          memberType: '会员',
          companyName: '北京公路建设有限公司',
          searchWord: '汽车零件标准',
          resultAccount: '55',
          date: '2018-10-15 15:08'
        }]
      }
    }
  },
  methods: {
    changeSearchData (val) {
      this.recordPageInfo.memberName = val.memberName
      this.recordPageInfo.phoneNumber = val.phoneNumber
      this.recordPageInfo.memberType = val.memberType
      this.recordPageInfo.companyName = val.companyName
      this.recordPageInfo.resultCount = val.resultCount
    },
    /* *
     * 分页大小改变
     * */
    paginationSizeChange: function (val) {
      this.recordPageInfo.pageSize = val
      console.log(this.recordPageInfo)
    },
    /* *
     * 页码改变
     * */
    paginationCurrentChange: function (val) {
      this.recordPageInfo.currentPage = val
      console.log(this.recordPageInfo)
    }
    /* *
     * axios方法，根据查询条件，请求后台数据
     * */
  }
}
</script>

<style scoped></style>
