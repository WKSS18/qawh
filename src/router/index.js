import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/index.vue'
import Hotel from "@/views/hotel/hotel.vue"
import Order from '@/views/order/order.vue'
import Profile from '@/views/profile/profile.vue'
Vue.use(VueRouter)
  const routes = [
  {
    path: '/',
    redirect:"/index"
  },
  {
    path:'/index',
    component:Index
  },
  {
    path:'/hotel',
    component:Hotel,
    meta:{
      title:"酒店"
    }
  },
  {
    path:"/order",
    component:Order
  },
  {
    path:"/profile",
    component:Profile
  }
]

const router = new VueRouter({
  routes
})

export default router
