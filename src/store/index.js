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
    searchProject:'',//查询项目信息（建设）
    editProject:'',//修改项目信息（建设）
    searchSurvey:'',//查询巡查信息
    editSurvey:'',//修改巡查信息
  },
  mutations: {
    setTopActive(state, v) {
      state.topActive = v
    },
    //查询项目信息（建设）
    setSearchProject(state,v){
      state.searchProject = v
    },
    //修改项目信息（建设）
    setEditProject(state,v){
      state.editProject=v
    },
    setSearchSurvey(state,v){
      state.searchSurvey=v
    },
    setEditSurvey(state,v){
      state.editSurvey=v
    }
  },
  modules: {
  }
})

export default store