<template>
  <div class="hotel-container">
    <div class="hotel-navimg">
      <div class="hotel-back">
        <i class="iconfont back-change" @click="$router.push('/index')">&#xe928;</i>
      </div>
      <img src="//source.qunarzz.com/site/images/wap/home/recommend/homebg.png" alt="头图" />
    </div>
    <div class="hotel-manager">
      <div class="hotel-tab">
        <ul class="hotel-tablis">
          <router-link tag="li" active-class="hotelactive" to="/hotel/hotelinland">国内･港澳台</router-link>
          <router-link tag="li" to="/hotel/hoteloverseas" active-class="hotelactive">海外</router-link>
        </ul>
        <router-view></router-view>
        <div class="hotel-order">
          <i class="iconfont">&#xe502;</i>
          <span style="margin:0 5px">我的订单</span>
          <i class="iconfont" style="color:#9e9e9e;font-size:12px">&#xe501;</i>
        </div>
      </div>

      <div class="hotel-show">
        <p class="hotel-showtit">
          <span class="hotel-titlf">酒店排行榜</span>
          <span class="hotel-titrf">
            全部榜单
            <i class="iconfont" style="font-size:12px">&#xe501;</i>
          </span>
        </p>
        <ul class="hotel-showlist">
          <li class="hotel-showitem" v-for="item in hotelshowlist" :key="item.second">
            <img :src="item.img" alt />
            <p class="hotel-showthem">{{item.title}}</p>
            <p class="hotel-showmany"><i class="iconfont" style='font-size:12px;'>&#xe505;</i>{{item.grassCount}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template> 

<script>
import { getHotelData } from "@/api/hotel.js";
import "@/assets/style/font.scss";
import Pinyin from "pinyin";
export default {
  data() {
    return {
      hotelshowlist: []
    };
  },

  async created() {
    let hotelshowrs = await getHotelData();
    this.hotelshowlist = hotelshowrs.data.data.cnRankHomeBoard.boards;
  },

  methods: {
    submitForm() {}
  }
};
</script>

<style lang="scss">
.back-change {
  color: white;
  font-size: 25px;
}
.hotel-navimg {
  position: relative;
  img {
    width: 375px;
    height: 316px;
  }
}

.hotel-back {
  position: absolute;
  left: 25px;
  top: 16px;
}

.hotelactive {
  color: #0ac4dd !important;
}

.hotel-container {
  position: relative;
}

.hotel-tab {
  height: 338px;
  border-radius: 8px;
  background: white;
  box-shadow: 0 0 0.1rem 0 rgba(12, 41, 55, 0.15);
}
.hotel-manager {
  position: absolute;
  top: 153px;
  left: 0px;
  width: 90%;
  margin-left: 5%;
}

ul.hotel-tablis {
  display: flex;
  height: 51px;
  align-items: center;
  border-bottom: 1px solid #eee;
}

ul.hotel-tablis {
  li {
    border-right: 1px solid #eee;
    padding: 4px;
    flex: 1;
    text-align: center;
    color: #000;
    font-size: 18px;
    font-family: PingFangSC-Regular, MicroSoft YaHei, "sans-serif";
    &:last-child {
      border-right: none;
    }
  }
}

.hotel-order {
  line-height: 50px;
  text-align: center;
  i {
    vertical-align: middle;
  }
}

p.hotel-showtit {
  height: 30px;
  line-height: 30px;
}

span.hotel-titlf {
  font-size: 20px;
  font-family: PingFangSC-Regular, MicroSoft YaHei, "sans-serif";
}

span.hotel-titrf {
  color: #616161;
  float: right;
  font-size: 12px;
}

.hotel-show {
  margin-top: 20px;
}

.hotel-showlist {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
}

.hotel-showitem {
  background: white;
  border-radius: 5px;
  width: 160px;
  margin-top: 20px;
  box-shadow: 0 0 0.1rem 0 rgba(12, 41, 55, 0.15);
  height: 150px;
  img {
    width: 160px;
    height: 88px;
    border-radius: 5px;
  }
}

p.hotel-showthem {
    padding: 8px 10px 0px;
    line-height: 20px;
    font-size: 14px;
    color: #000;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

p.hotel-showmany {
    align-items: center;
    padding: 8px 10px 0;
    font-size: 10px;
    color: #666;
    line-height: 14px;
}
</style>