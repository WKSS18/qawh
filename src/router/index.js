import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/index.vue'
import Hotel from "@/views/hotel/hotel.vue"


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
    component:Hotel
  }
 
]

const router = new VueRouter({
  routes
})

export default router
