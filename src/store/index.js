import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    title: '智慧农路',
    topActive: '1',
    base_bottom: [
      "江苏纬信工程咨询有限公司 ",
      "江苏智城慧宁提供技术支持"
    ],
  },
  mutations: {
    setTopActive(state, v) {
      state.topActive = v
    }
  },
  modules: {
  }
})

export default store