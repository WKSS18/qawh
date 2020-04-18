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
      <p class="hoteldetail-location">
        <i class="iconfont hotelloccha">&#xe709;</i>
      </p>
    </div>
    <div class="hoteldetail-tabbase">
      <ul class="hoteldetail-tablist">
        <li class="hoteldetailtab-refer">
          <span>推荐排序</span>
          <i></i>
        </li>
        <li class="hoteldetailtab-price">
          <span>星级价格</span>
          <i></i>
        </li>
        <li class="hoteldetailtab-origin">
          <span>位置区域</span>
          <i></i>
        </li>
        <li class="hoteldetailtab-sizer">
          <span>筛选</span>
          <i></i>
        </li>
      </ul>
    </div>
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

BScroll.use(Pullup);
export default {
  data() {
    return {
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
      if (hoteldetailrs.status === 200) {
        this.hotelmessage.hoteldetaillist.push(
          ...hoteldetailrs.data.data.hotels
        );
      }
      this.hotelmessage.hotelslen = hoteldetailrs.data.data.hotels.length;
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
    }
  },
  components: {
    Hoteldetailitem
  }
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
  margin-top: 10px;
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
</style>