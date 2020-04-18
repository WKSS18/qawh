import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/index.vue'
import Hotel from "@/views/hotel/hotel.vue"
import Order from '@/views/order/order.vue'
import Profile from '@/views/profile/profile.vue'
import Child from '@/views/indexcon/child.vue'
import Block from '@/views/indexcon/block.vue'
import City from '@/components/city.vue'
import HotelInland from '@/views/hotel/hotelinland'
import HotelLoverseas from '@/views/hotel/hoteloverseas'
import HotelChoice from '@/views/hotel/hotelchoice'
import HotelDetail from '@/views/hotel/hoteldetail'
import Strategy from '@/views/strategy/strategy'

Vue.use(VueRouter)
  const routes = [
  {
    path: '/',
    redirect:"/index"
  },
  {
    path:'/index',
    redirect:'/index/child',
    component:Index,
    children:[
      {
        path:'/index/child',
        component:Child
      },
      {
        path:'/index/block',
        component:Block
      }
    ]
  },
  {
    path:'/hotel',
    component:Hotel,
    redirect:"/hotel/hotelinland",
    meta:{
      title:"酒店"
    },
    children:[
      {
        path:"/hotel/hotelinland",
        component:HotelInland
      },
      {
        path:"/hotel/hoteloverseas",
        component:HotelLoverseas
      }
    ]
  },
  {
    path:'/strategy',
    component:Strategy,
    meta:{
      title:'攻略'
    }
  },
  {
    path:"/order",
    component:Order
  },
  {
    path:"/profile",
    component:Profile
  },
  {
    path:'/city',
    component:City
  },
  {
    path:'/hotelchoice',
    component:HotelChoice
  },
  {
    path:'/hoteldetail',
    component:HotelDetail
  }
]

const router = new VueRouter({
  routes
})

export default router
