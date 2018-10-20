import Vue from 'vue'
import Router from 'vue-router'
import LoginView from '../page/LoginView.vue'
import PagesView from '../page/PagesView.vue'
import StatisticView from '../page/StatisticView.vue'
import IntegralSearchView from '../page/IntegralSearchView.vue'
import SearchRecordView from '../page/SearchRecordView.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    /* *
     * 全局路由重定向
     * */
    {
      path: '/',
      name: 'Knowledge',
      redirect: '/knowledge/'
    },
    /* *
     * 登录路由
     * */
    {
      path: '/login',
      name: 'LoginView',
      component: LoginView
    },
    /* *
    * 错误路由
    * */
    {
      path: '*',
      redirect: '/knowledge'
    },
    {
      path: '/knowledge',
      component: PagesView,
      meta: {
        requireAuth: true
      },
      children: [
        {
          path: '',
          redirect: '/knowledge/statistic'
        },
        {
          path: 'statistic',
          name: 'StatisticView',
          component: StatisticView
        },
        {
          path: 'integral',
          name: 'IntegralSearchView',
          component: IntegralSearchView
        },
        {
          path: 'searchRecord',
          name: 'SearchRecordView',
          component: SearchRecordView
        }
      ]
    }
  ]
})

/* *
 * 全局路由守卫
 * */
router.beforeEach((to, from, next) => {
  console.log('路由守卫')
  // to: Route: 即将要进入的目标 路由对象
  // from: Route: 当前导航正要离开的路由
  // next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。

  const nextRoute = ['SearchRecordView', 'IntegralSearchView', 'StatisticView']
  // 是否登录
  let isLogin = true
  // 未登录状态；当路由到nextRoute指定页时，跳转至login
  if (nextRoute.indexOf(to.name) >= 0) {
    if (!isLogin) {
      router.push({name: 'LoginView'})
    }
  }
  // 已登录状态；当路由到login时，跳转至knowledge
  if (to.name === 'LoginView') {
    if (isLogin) {
      router.push({name: 'Knowledge'})
    }
  }
  next()
})

export default router
