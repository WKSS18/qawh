<template>
  <div class="city-container">
    <div class="city-wrapper" ref="city-wrapper">
      <div>
        <section id="city-list" class="city-list-container" style="display: block;">
          <section>
            <div id="locate" class="city-title">定位城市</div>
            <div class="city-list city-list-inline clearfix">
              <div class="location-city">定位失败，请点击重试</div>
            </div>
          </section>

          <section class="history-city-list">
            <div id="history" class="city-title">历史城市</div>
            <div class="city-list city-list-inline clearfix">
              <div class="city-item" v-for="item in historylist" :key="item.id">{{item.name}}</div>
            </div>
          </section>

          <section>
            <div id="hot" class="city-title">热门城市</div>
            <div class="city-list city-list-inline clearfix">
              <div class="city-item" v-for="item in hotCities" :key="item.id">{{item.name}}</div>
            </div>
          </section>

          <section>
            <div v-for="(item,index) in citylist" :key="index">
              <div :id="index" class="city-title city-title-letter">{{index}}</div>
              <div class="city-list city-list-block clearfix">
                <div
                  class="city-item"
                  v-for="city in item"
                  :key="city.id"
                  @click="pointcity(city)"
                >{{city.name}}</div>
              </div>
            </div>
          </section>
        </section>
      </div>
    </div>

    <section class="nav">
      <div class="nav-item" data-id="locate" @click="gocity('locate')">定位</div>

      <div class="nav-item" data-id="history" @click="gocity('history')">最近</div>

      <div class="nav-item" data-id="hot" @click="gocity('hot')">热门</div>

      <div
        class="nav-letter nav-item"
        v-for="item in getsetters"
        :key="item"
        @click="gocity(item)"
        :ref="item"
        @touchmove="handTouch"
      >{{item}}</div>
    </section>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";
import {getCities} from '@/api/hotel.js'
BScroll.use(Pullup);
export default {
  data() {
    return {
      hotCities: [],
      citylist: [],
      historylist: [],
      topHeight: 0,
      letterHeight: 0
    };
  },
  computed: {
    getsetters() {
      return Object.keys(this.citylist);
    }
  },
  async created() {
    let rs = await getCities();
    this.hotCities = rs.data.hotCities;
    this.citylist = rs.data.cities;
    this.$nextTick(() => {
      this.initScroll();

      // 字母A距离页面顶部的高度
      this.topHeight = this.$refs["A"][0].getBoundingClientRect().y;

      // 计算出每个字符所占的高度
      this.letterHeight = this.$refs["A"][0].offsetHeight;
    });
  },
  methods: {
    pointcity(city) {
      // 数据提前存到缓存中去
      this.$cache.addcity(city);
      this.$store.commit("SET_CITY", city);
      this.$router.go(-1);
    },

    // 竖直滚动效果
    initScroll() {
      this.cityscroll = new BScroll(this.$refs["city-wrapper"], {
        scrollY: true,
        click: true,
        probeType: 3,
        pullUpload: true
      });
    },

    // 利用scrollToElement实现锚点链接效果
    gocity(l) {
      this.cityscroll.scrollToElement(`#${l}`, 100);
    },

    // 触摸滑动效果
    handTouch(event) {
      // 获取当前位置到顶部的距离
      let currentY = event.touches[0].pageY;
      // 获取当前的下标
      let index = Math.floor((currentY - this.topHeight) / this.letterHeight);

      // 根据下标找到这个字母
      let letter = Object.keys(this.citylist)[index];

      // 锚点跳转
      this.cityscroll.scrollToElement(`#${letter}`, 200);
    }
  },
  mounted() {
    // 取出localStorage中的数据
    let list = JSON.parse(localStorage.getItem("historyname"));
    let start = list.length > 6 ? list.length - 6 : 0;
    // 只取最新的6条数据  并且最新的数据放在最前面，翻转
    this.historylist = list.slice(start).reverse();
  }
};
</script>



<style lang="scss" scoped>
.city-container {
  height: 100%;
}
.city-wrapper {
  height: 100%;
  overflow: hidden;
}
.locatebanner {
  position: fixed;
  z-index: 1;
  bottom: 50px;
  left: 0;
  right: 0;
  margin: 0 12px 11px;
  padding: 8px;
  border-radius: 5px;
  background: hsla(0, 0%, 94%, 0.9);
  color: #666;
  font-size: 13px;
  display: -webkit-box;
  display: flex;
  align-content: center;
  margin-bottom: constant(safe-area-inset-bottom);
  margin-bottom: env(safe-area-inset-bottom);
}

.locatebanner img {
  width: 14px;
  height: 14px;
  margin-top: 2px;
}

.locatebanner-arrow {
  margin-right: 5px;
}

.locatebanner-refresh-wrap {
  -webkit-box-flex: 1;
  flex-grow: 1;
  text-align: right;
}

.locatebanner-refresh {
  display: inline;
}

.city-entry-arrow {
  width: 0;
  height: 0;
  border: 4px solid #b0b0b0;
  border-left-color: transparent;
  border-right-color: transparent;
  border-bottom-color: transparent;
  display: inline-block;
  margin-left: 4px;
  margin-right: 5px;
  margin-top: 5px;
}

.city-list-container {
  display: none;
  background-color: #ebebeb;
  font-size: 14px;
  color: #333;
  top: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  // position: absolute;
  // z-index: 1000;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

.clearfix:after {
  content: " ";
  display: table;
  clear: both;
}

.city-title {
  padding-left: 15px;
  line-height: 30px;
}

.city-title-letter {
  padding-left: 25px;
}

.city-list {
  padding-right: 30px;
}

.city-list-inline {
  background-color: #f5f5f5;
  padding-bottom: 8px;
}

.city-list-inline .city-item,
.city-list-inline .location-city {
  float: left;
  background: #fff;
  width: 29%;
  height: 33px;
  margin-top: 15px;
  margin-left: 4%;
  padding: 0 4px;
  border: 1px solid #e6e6e6;
  border-radius: 3px;
  line-height: 33px;
  text-align: center;
  box-sizing: border-box;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.city-list-inline .location-city {
  width: auto;
  min-width: 30%;
  padding: 0 20px;
}

.city-list-block {
  background-color: #f5f5f5;
}

.city-list-block .city-item {
  height: 44px;
  line-height: 44px;
  margin-left: 15px;
  border-bottom: 1px solid #c8c7cc;
}

.city-list-block .city-item:last-child {
  border-bottom: none;
}

.nav {
  position: fixed;
  top: 75px;
  top: 11vh;
  right: 0;
  width: 35px;
  z-index: 10;
  text-align: center;
  font-size: 12px;
}

.nav .nav-item {
  height: 16px;
  height: 2.8vh;
}

.nav .nav-letter {
  width: 15px;
  margin-left: 15px;
}

.city-entry {
  padding-left: 15px;
  font-size: 15px;
  color: #666;
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
}

.city-entry-arrow {
  width: 0;
  height: 0;
  border: 4px solid #b0b0b0;
  border-left-color: transparent;
  border-right-color: transparent;
  border-bottom-color: transparent;
  display: inline-block;
  margin-left: 4px;
  margin-top: 5px;
}

.city-entry .city-name {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 70px;
  max-width: 19.2vw;
}
</style>

