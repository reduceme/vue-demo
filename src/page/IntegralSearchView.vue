<template>
  <div>
    <integral-search-bar @changeSearchData="changeSearchData($event)" :integralPageInfo="integralPageInfo"></integral-search-bar>
    <intefral-search-list :tableData="tableListInfo.tableData"></intefral-search-list>
    <pagination ref="pageChild" :pageInfo="integralPageInfo" :total="tableListInfo.total" @handleSizeChange="paginationSizeChange($event)" @handleCurrentChange="paginationCurrentChange($event)"></pagination>
  </div>
</template>

<script>
import IntegralSearchBar from '../components/IntegralSearchBar.vue'
import IntefralSearchList from '../components/IntegralSearchList.vue'
import Pagination from '../components/Pagination'

export default {
  name: 'intrgral-search-view',
  components: { IntegralSearchBar, IntefralSearchList, Pagination },
  data () {
    return {
      /* *
      * 查询条件
      * */
      integralPageInfo: {
        pageSize: 20,
        currentPage: 1,
        memberName: '',
        phoneNumber: '',
        incomeType: '',
        startTime: '',
        endTime: ''
      },
      /* *
       * 从后台获取的数据赋值
       * */
      tableListInfo: {
        total: 200,
        tableData: [{
          id: '123456',
          memberName: '北京公路建设有限公司',
          phoneNumber: '13511111111',
          incometype: '1',
          integral: '+100',
          recharge: 100,
          incomeThing: '标准下载',
          date: '2018-10-15 15:08'
        }, {
          id: '123456',
          memberName: '北京公路建设有限公司',
          phoneNumber: '13511111111',
          incometype: '1',
          integral: '+100',
          recharge: 100,
          incomeThing: '标准下载',
          date: '2018-10-15 15:08'
        }, {
          id: '123456',
          memberName: '北京公路建设有限公司',
          phoneNumber: '13511111111',
          incometype: '1',
          integral: '+100',
          recharge: 100,
          incomeThing: '标准下载',
          date: '2018-10-15 15:08'
        }, {
          id: '123456',
          memberName: '北京公路建设有限公司',
          phoneNumber: '13511111111',
          incometype: '1',
          integral: '+100',
          recharge: 100,
          incomeThing: '标准下载',
          date: '2018-10-15 15:08'
        }]
      }
    }
  },
  methods: {
    changeSearchData (val) {
      this.integralPageInfo.memberName = val.memberName
      this.integralPageInfo.phoneNumber = val.phoneNumber
      this.integralPageInfo.incomeType = val.incomeType
      this.integralPageInfo.startTime = val.startTime
      this.integralPageInfo.endTime = val.endTime
    },
    /* *
     * 分页大小改变
     * */
    paginationSizeChange: function (val) {
      this.integralPageInfo.pageSize = val
      console.log(this.integralPageInfo)
    },
    /* *
     * 页码改变
     * */
    paginationCurrentChange: function (val) {
      this.integralPageInfo.currentPage = val
      console.log(this.integralPageInfo)
    }
    /* *
     * axios方法，根据查询条件，请求后台数据
     * */
  }
}
</script>
