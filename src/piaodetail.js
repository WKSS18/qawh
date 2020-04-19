import Vue from 'vue'
import piaodetail from './views/detail/piaodetail.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false
new Vue({
  render: h => h(piaodetail)
}).$mount('#app')
