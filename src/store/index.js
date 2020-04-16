import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cityname:"北京",
    hotelmessage:{}
  },
  mutations: {
    SET_CITY(state,status){
      state.cityname = status.name;
    },
    SET_HOTELMSG(state,status){
      state.hotelmessage = status
    }
  },
  actions: {
  },
  modules: {
  }
})
