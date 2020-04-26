<template>
  <div class="hoteldetail-container">
    <div class="hoteldetail-head">
      <i class="iconfont hoteldetailbak" @click="$router.go(-1)">&#xe928;</i>
      <p class="hoteldetail-datetime">
        <span>
          <i>住</i>
          {{hotelmessage.initmsg.checkInDate.slice(5,)}}
        </span>
        <span>
          <i>离</i>
          {{hotelmessage.initmsg.checkOutDate.slice(5,)}}
        </span>
      </p>
      <p class="hoteldetail-address">
        <span class="hoteldetail-cityname">{{hotelmessage.initmsg.city}}</span>
        <input type="text" readonly placeholder="地名/酒店/关键字" />
      </p>
      <p class="hoteldetail-location" @click='showmap=!showmap'>
        <i class="iconfont hotelloccha">&#xe709;</i>
      </p>
    </div>

    <div class="hoteldetail-tabbase">
      <ul class="hoteldetail-tablist">
        <li class="hoteldetailtab-refer">
          <!-- <span>推荐排序</span> -->
          <span @click="changesort=!changesort">
          推荐排序
          <i class="iconfont">{{changesort ? '&#xe6aa;': '&#xe630;'}}</i>
          </span>
          
        </li>
        <li class="hoteldetailtab-price">
          <!-- <span>星级价格</span> -->
          <span @click="changeprice=!changeprice">
          星级价格
          <i class="iconfont">{{changeprice ? '&#xe6aa;': '&#xe630;'}}</i>
          </span>
          
        </li>
        <li class="hoteldetailtab-origin">
          <!-- <span>位置区域</span> -->
          <span  @click="changearea=!changearea">
          位置区域
          <i class="iconfont">{{changearea ? '&#xe6aa;': '&#xe630;'}}</i>
          </span>

        </li>
        <li class="hoteldetailtab-sizer">
          <!-- <span>筛选</span> -->
          <span @click="changefilter=!changefilter">
          筛选
          <i class="iconfont">{{changefilter ? '&#xe6aa;': '&#xe630;'}}</i>
          </span>
        </li>
      </ul>
    </div> 

    <HotelSort v-show='changesort'></HotelSort>  
    <HotelPrice v-show='changeprice'></HotelPrice>
    <HotelArea v-show='changearea'></HotelArea>
    <HotelFilter v-show="changefilter"></HotelFilter>
    <HotelMap v-show='showmap'></HotelMap>
    <div class="hoteldetail-trait" v-show="showtrait">
      <ul class="hoteldetail-traitlist">
        <li>安心住</li>
        <li>品质联盟</li>
        <li>促销优惠</li>
        <li>非中央空调</li>
      </ul>
    </div>
    <div class="hoteldetail-main" ref="index-wrapper">
      <div class="hoteldetail-wrapper">
        <Hoteldetailitem
          v-for="item in hotelmessage.hoteldetaillist"
          :key="item.seqNo"
          :item="item"
        ></Hoteldetailitem>
      </div>
    </div>
  </div>
</template>
<script>
import { getHotelDetailDate } from "@/api/hotel.js";
import Hoteldetailitem from "./hoteldetailitem";
import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";
import { Indicator, Toast } from "mint-ui";
import '@/assets/style/fonts.scss'
import "mint-ui/lib/style.css";
import HotelSort from './hotelsort'
import HotelPrice from './hotelprice'
import HotelArea from './hotelarea'
import HotelFilter from './hotelfilter'
import HotelMap from './hotelmap'
BScroll.use(Pullup);
export default {
  data() {
    return {
      changeview:false,
      changesort:false,
      changeprice:false,
      changearea:false,
      changefilter:false,
      showmap:false,
      showtrait: true,
      hotelmessage: {
        bd_source: "",
        checkInDate: "",
        checkOutDate: "",
        city: "",
        cityUrl: "",
        extra: {},
        keywords: "",
        location: "",
        locationAreaFilterSelected: [],
        needSec: true,
        page: 1,
        sort: "0",
        hoteldetaillist: [],
        initmsg: {},
        hotelslen: 0
      }
    };
  },
  components:{
    HotelSort,
    HotelPrice,
    HotelArea,
    HotelFilter,
    HotelMap,
    Hoteldetailitem
  },
  created() {
    this.pullingUpHandler();
  },
  mounted() {
    this.$nextTick(() => {
      this.initBscroll();
    });
  },
  methods: {
    initBscroll() {
      this.bscroll = new BScroll(this.$refs["index-wrapper"], {
        scrollY: true,
        pullUpLoad: true,
        click: true
      });
      this.bscroll.on("scroll", position => {
        if (position.y < -50) {
          this.showtrait = false;
        } else {
          this.showtrait = true;
        }
      });
      this.bscroll.on("pullingUp", () => this.pullingUpHandler());
    },
    async pullingUpHandler() {
      Indicator.open();
      let hotelmsg = JSON.parse(sessionStorage.getItem("hotelmsg"));
      this.hotelmessage.initmsg = hotelmsg;
      let hoteldetailrs = await getHotelDetailDate({
        bd_source: "",
        checkInDate: hotelmsg.checkInDate,
        checkOutDate: hotelmsg.checkOutDate,
        city: hotelmsg.city,
        cityUrl: hotelmsg.cityurl,
        extra: {},
        keywords: hotelmsg.keywords,
        location: "",
        locationAreaFilterSelected: [],
        needSec: true,
        page: this.hotelmessage.page,
        sort: "0"
      });
      if(hoteldetailrs.data.ret){
         this.hotelmessage.hoteldetaillist.push(...hoteldetailrs.data.data.hotels);
         this.hotelmessage.hotelslen = hoteldetailrs.data.data.hotels.length;
      }
      this.$nextTick(() => {
        this.hotelmessage.page++;
        Indicator.close();
        this.bscroll.finishPullUp();
        this.bscroll.refresh();
        if (this.hotelmessage.hotelslen === 0) {
          Toast({
            message: "没有更多的数据了",
            position: "bottom",
            duration: 2000
          });
          return;
        }
      });
    },
    changes(){
      console.log('aa')
      this.changei =!this.changei;
      console.log(this.changei)
      return this.changei;
    }
  },

};
</script>

<style lang="scss" scoped>
.hoteldetail-head {
  height: 32px;
  padding: 6px 12px 6px 16px;
}
.hoteldetail-tabbase {
  height: 40px;
  display: flex;
  flex-direction: row;
  box-shadow: 2px 2px 2px #666;
}
ul.hoteldetail-tablist {
  display: flex;
  width: 100%;
  align-items: center;
}
ul.hoteldetail-tablist li {
  flex: 1;
  font-size: 13px;
  text-align: center;
  color: #333;
}
.hoteldetail-trait {
  height: 40px;
  background: #f7f7f7;
}
ul.hoteldetail-traitlist {
  display: flex;
  justify-content: center;
}
ul.hoteldetail-traitlist li {
  text-align: center;
  color: 12px;
  font-size: 12px;
  background: white;
  padding: 6px 14px;
  color: #333;
  margin: 8px;
  border-radius: 5px;
}
.hoteldetail-container {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.hoteldetail-main {
  flex: 1;
  // margin-top: 10px;
  overflow: hidden;
}
.hoteldetail-head {
  display: flex;
}
p.hoteldetail-datetime {
  display: flex;
  flex-direction: column;
  text-decoration: none;
}
p.hoteldetail-datetime i {
  font-style: normal;
  color: black;
  margin: 2px;
}
p.hoteldetail-datetime span {
  color: #2d96a4;
  margin-bottom: 3px;
}
p.hoteldetail-address {
  height: 32px;
  border-radius: 5px;
  background: #f7f7f7;
}
span.hoteldetail-cityname {
  color: #2d96a4;
  padding: 2px 17px;
  line-height: 33px;
  border-right: 1px solid #ccc;
}
p.hoteldetail-address input {
  border: none;
  background: #f7f7f7;
  outline: none;
  padding-left: 14px;
}
p.hoteldetail-address {
  margin-left: 5px;
}
p.hoteldetail-datetime {
  background: #f7f7f7;
  padding: 3px;
  border-radius: 5px;
}

i.hoteldetailbak {
  padding-top: 7px;
  margin-right: 13px;
}
p.hoteldetail-location {
  line-height: 30px;
  margin-left: 16px;
}

.hotelactive{
  color:#2d96a4;
  &{
    color:#2d96a4!important;
    
  }
}
li.hoteldetailtab-price a {
    text-decoration: none;
    color: black;
}

ul.hoteldetail-tablist {
   text-decoration: none;
    color: black;
}

li.hoteldetailtab-refer a {
   text-decoration: none;
    color: black;
}

li.hoteldetailtab-origin a {
   text-decoration: none;
    color: black;
}

li.hoteldetailtab-sizer a {
   text-decoration: none;
    color: black;
}
.hoteldetail-container {
    position: relative;
}
</style>
