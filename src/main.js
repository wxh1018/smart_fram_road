// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import send from './until/send'
import base from './until/base'
import login_js from './until/login'
import echarts from 'echarts'
import store from './store'
import axios from 'axios'
Vue.prototype.$echarts = echarts
import VDistpicker from 'v-distpicker'

Vue.component('v-distpicker', VDistpicker);

Vue.config.productionTip = false
Vue.use(Element)
Vue.prototype.$em = send
Vue.prototype.base = base
Vue.prototype.login_js = login_js
Vue.prototype.$axios = axios 
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
