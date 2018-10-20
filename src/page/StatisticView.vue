<template>
  <div>
    <!--<member-search-bar @click="searchBar" ref="searchChild" :pageInfo="pageInfo" @changeSearchData="searchBar($event)"></member-search-bar>-->
    <member-search-bar @click="searchBar" ref="searchChild" :pageInfo="pageInfo"></member-search-bar>
    <member-search-list :tableData="tableListInfo.tableData"></member-search-list>
    <!--<pagination ref="pageChild" :pageInfo="pageInfo" :total="tableListInfo.total" @handleSizeChange="paginationSizeChange($event)" @handleCurrentChange="paginationCurrentChange($event)"></pagination>-->
    <pagination ref="pageChild" :pageInfo="pageInfo" :total="tableListInfo.total" @handleSizeChange="paginationSizeChange($event)" @handleCurrentChange="paginationCurrentChange($event)"></pagination>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import MemberSearchBar from '../components/MemberSearchBar'
import MemberSearchList from '../components/MemberSearchList'
import Pagination from '../components/Pagination'

export default {
  name: 'statistic-view',
  components: { MemberSearchBar, MemberSearchList, Pagination },
  data () {
    return {
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
      }
    }
  },
  computed: {
    ...mapState({
      pageInfo: state => state.statistic.pageInfo
    })
  },
  methods: {
    getPageInfo: function () {
      this.$store.dispatch('getPageInfo')
    },
    searchBar () {
      this.getPageInfo()
    }
  }
}
</script>

<style scoped>
.el-dialog__header {
  background: #4286DC;
}
</style>
