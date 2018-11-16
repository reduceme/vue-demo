<template>
  <div class="bar">
    <el-container>
      <el-header>
        <div class="header-title">标准平台管理系统</div>
        <div class="header-icon" @click="logout" style="margin-right: 50px">
          <img class="header-image" src="../assets/icon-08.png"/>
          <span class="header-operating">退出</span>
        </div>
        <div class="header-icon">
          <img class="header-image" src="../assets/icon-07.png"/>
          <span class="header-operating">{{loginUser}}</span>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu :default-openeds="['0']" router :default-active="$route.path">
            <el-submenu :key="item.key" :index="''+index" v-for="(item, index) in menuList">
              <template slot="title">{{item.title}}</template>
              <el-menu-item :key="subItem.key" :index="subItem.path"
                            v-for="subItem in secondMenuList[item.attribute]"
                            :class="$route.path==subItem.path?'is-active':''">{{subItem.title}}
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-container>
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Axios from 'axios'
import { Message } from 'element-ui'
export default {
  name: 'aside-bar',
  data () {
    return {
      loginUser: '四川语言桥',
      menuList: [{
        title: '会员管理',
        attribute: 'menberStatistic',
        key: 'menberStatistic'
      }],
      secondMenuList: {
        menberStatistic: [{
          title: '会员统计',
          path: '/knowledge/statistic',
          key: 'statistic'
        }, {
          title: '积分查询',
          path: '/knowledge/integral',
          key: 'integral'
        }, {
          title: '搜索记录',
          path: '/knowledge/searchRecord',
          key: 'searchRecord'
        }]
      }
    }
  },
  methods: {
    logout () {
      Axios.get('/logout').then((response) => {
        let data = response.data
        if (data.status === 'success') {
          this.$router.push({
            path: '/login/'
          })
        } else {
          Message.error({
            message: data.msg
          })
        }
      }).catch(function (response) {
        Message.error({
          message: '网络连接失败'
        })
      })
    },
    getUserInfo () {
      Axios.get('/member/get_user_info').then(response => {
        if (response.status === 200) {
          this.loginUser = response.data.mbName
        }
      })
    }
  },
  mounted () {
    this.getUserInfo()
  }
}
</script>

<style>
  .bar {
    height: 100%;
  }

  .el-container {
    height: 100%;
  }

  .el-header {
    background: #031337;
    height: 85px !important;
  }

  .header-title {
    color: #FFFFFF;
    float: left;
    height: 85px;
    padding-left: 50px;
    line-height: 85px;
    font-size: 25px;
  }

  .header-icon {
    float: right;
    height: 85px;
    line-height: 85px;
    display: block;
    margin-left: 80px;
    cursor: pointer;
  }

  .header-image {
    width: 25px;
    height: 25px;
    vertical-align: middle
  }

  .header-operating {
    color: white;
    font-size: 14px;
  }

  .el-submenu__title {
    background: #031337 !important;
    margin-top: 1px;
    color: white;
    font-size: 16px;
    width: 200px;
    height: 50px;
    line-height: 50px;
  }

  .el-submenu__title i {
    color: white;
    font-size: 16px;
  }

  .el-menu {
    height: 100%;
  }

  .el-menu-item {
    margin-top: 1px;
    background: #E5E5E5;
  }

  .el-menu-item.is-active {
    background: #4286DC;
    color: white;
  }
  /* .el-menu-item.is-active:after {
    content: '';
    position: absolute;
    right: -7px;
    top: 15px;
    border: 7px solid #00a0e9;
    border-top: 7px solid transparent;
    border-bottom: 7px solid transparent;
    border-right: none;
  } */
</style>
