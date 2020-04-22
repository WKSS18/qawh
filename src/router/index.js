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
import OrderAll from '@/views/order/orderall'
import StayGo from '@/views/order/staygo'
import StayPay from '@/views/order/staypay'
import Refund from '@/views/order/refund'
import Login from '@/views/user/login'
import Register from '@/views/user/register'
import Note from '@/views/user/note'
import Account from '@/views/user/account'
import Logout from '@/views/user/logout'
import CityMore from '@/views/strategy/citymore'
import BoardCity from '@/views/strategy/boardcity'
import InLand from '@/views/strategy/inland'
import HotelSort from '@/views/hotel/hotelsort'
import HotelPrice from '@/views/hotel/hotelprice'
import HotelArea from '@/views/hotel/hotelarea'
import HotelFilter from '@/views/hotel/hotelfilter'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    redirect: "/index"
  },
  {
    path: '/index',
    redirect: '/index/child',
    component: Index,
    children: [
      {
        path: '/index/child',
        component: Child
      },
      {
        path: '/index/block',
        component: Block
      }
    ]
  },
  {
    path: '/hotel',
    component: Hotel,
    redirect: "/hotel/hotelinland",
    meta: {
      title: "酒店"
    },
    children: [
      {
        path: "/hotel/hotelinland",
        component: HotelInland
      },
      {
        path: "/hotel/hoteloverseas",
        component: HotelLoverseas
      }
    ]
  },
  {
    path: '/strategy',
    component: Strategy,
    meta: {
      title: '攻略'
    }
  },
  {
    path:'/strategy/citymore',
    component:CityMore,
    children:[
      {
        path:'boardcity',
        component:BoardCity
      },
      {
        path:'inland',
        component:InLand
      }
    ]
  },
  {
    path: "/order",
    component: Order,
    children: [
      {
        path: '/order/orderall',
        component: OrderAll
      },
      {
        path: '/order/staygo',
        component: StayGo
      },
      {
        path: '/order/staypay',
        component: StayPay
      },
      {
        path: '/order/refund',
        component: Refund
      }
    ]
  },
  {
    path: "/profile",
    component: Profile
  },
  {
    path: '/city',
    component: City
  },
  {
    path: '/hotelchoice',
    component: HotelChoice
  },
  {
    path: '/hoteldetail',
    component: HotelDetail,
    children:[
      {
        path:"hotelsort",
        component:HotelSort
      },
      {
        path:"hotelprice",
        component:HotelPrice
      },
      {
        path:'hotelarea',
        component:HotelArea
      },
      {
        path:'hotelfilter',
        component:HotelFilter
      }
    ]
  },
  {
    path: '/login',
    component: Login,
    redirect:'/login/account',
    children:[
      {
        path:'/login/note',
        component:Note,
      },
      {
        path:"/login/account",
        component:Account
      }
    ]
  },
  {
    path:'/logout',
    component:Logout
  },
  {
    path: '/register',
    component: Register
  }
]

const router = new VueRouter({
  routes
})

export default router
