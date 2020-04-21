import Vue from 'vue'
import hoteldetail from './views/detail/hoteldetail.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false
new Vue({
  render: h => h(hoteldetail)
}).$mount('#app')
