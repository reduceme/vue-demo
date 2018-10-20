/*
* 单页面主入口js文件
* author：zhaoyong
* date: 2018-10-12
* */
import Vue from 'vue'
import Axios from 'axios'
import App from './App'
import router from './router'

// 引用element-ui框架
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 设置
Vue.config.productionTip = false
Vue.prototype.http = Axios
Axios.defaults.baseURL = 'http://www.baidu.com'

// Vue全局使用element-ui
Vue.use(Element)

/* 挂载Vue实例 */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
