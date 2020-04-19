import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cityname: "北京",
    hotelmessage: {},
    isshowmain: true,
    isshowsearch: false
  },
  mutations: {
    SET_CITY(state, status) {
      state.cityname = status.name;
    },
    SET_HOTELMSG(state, status) {
      state.hotelmessage = status
    },
    SET_TICKSHOW(state, status) {
      if (status) {
        state.isshowmain = false;
        state.isshowsearch = true;
      } else {
        state.isshowmain = true;
        state.isshowsearch = false;
      }

    }
  },
  actions: {
  },
  modules: {
  }
})
