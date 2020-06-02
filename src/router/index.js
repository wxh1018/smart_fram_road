import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login.vue'
import Index from '@/components/Index'
import Home from '../components/Home.vue'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Login
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children:[
        //精准导航
        {
          path: '/daohang',
          name: 'daohang',
          component: ()=>import ('../views/DaoHang.vue'),
        },
        //建设--公路
        {
          path:'/highway',name:'highway',component:()=>import ('../components/building/highway/Home.vue'),
          children:[
            {path: '/building/highway/addProject',name: 'addProjectByHighway', component:()=>import ('../components/building/highway/addProject.vue')},
            {path: '/building/highway/searchProject',name: 'searchProjectByHighway', component: ()=>import ('../components/building/highway/searchProject.vue')},
            {path:'/building/highway/editProject',name:'editProjectByHighway',component:()=>import ('../components/building/highway/editProject.vue')}
          ]
        },
        {
          path:'/building/highway/addExcelByHighway',name:'highway',component:()=>import ('../components/building/highway/addExcelByHighway.vue'),
        },
        //建设--桥梁
        {
          path:'/bridge',name:'bridge',component:()=>import ('../components/building/bridge/Home.vue'),
          children:[
            {path: '/building/bridge/addProject',name: 'addProjectByBridge', component:()=>import ('../components/building/bridge/addProject.vue')},
            {path: '/building/bridge/searchProject',name: 'searchProjectByBridge', component: ()=>import ('../components/building/bridge/searchProject.vue')},
            {path:'/building/bridge/editProject',name:'editProjectByBridge',component:()=>import ('../components/building/bridge/editProject.vue')}
          ]
        },
        //统计--公路
        {
          path:'/highwayStatistics',name:'highwayStatistics',component:()=>import ('../components/statistics/highway.vue')
        },
        //统计--桥梁
        {
          path:'/bridgeStatistics',name:'bridgeStatistics',component:()=>import ('../components/statistics/bridge.vue')
        },
        //管养--查询巡查信息
        {
          path:'/searchSurvey',name:'searchSurvey',component:()=>import ('../components/custudy/searchSurvey.vue'),
          children:[
            {path:'/searchSurvey/search',name:"searchSurvey-search",component:()=>import ('../components/custudy/component/Search.vue')},
            {path:'/searchSurvey/edit',name:"searchSurvey-edit",component:()=>import ('../components/custudy/component/Edit.vue')},
          ]
        },
        //管养--增加巡查信息
        {
          path:'/sruvey',name:'sruvey',component:()=>import ('../components/custudy/Survey.vue')
        },
        //实时公交
        {path:'/realTimeBus',name:'realTimeBus',component:()=>import ('../components/RealTimeBus/LineBus.vue')},
        //公路旅游
        {path:'/roudTravel',name:'roudTravel',component:()=>import ('../components/RoudTravel/Travel.vue')},
        //运营--村镇公交
        {path:'/oeration-Bus',name:'oeration-Bus',component:()=>import ('../components/operation/Bus.vue')},
        //运营--物流网点
        {path:'/oeration-logistics',name:'oeration-logistics',component:()=>import('../components/operation/logistics.vue')}
      ]
    }
  ]
})
router.beforeEach((to, from, next) => {
  let token = localStorage.token
  if (token) {
    if (to.path == '/login') {
      next({path:from.path})
      return
    }
    next()
  } else {
    if (to.path !== '/login') {
      if (to.path == '/') {
        next()
      } else {
        next({ path: '/login' })
      }
    } else {
      next()
    }
  }
})
export default router