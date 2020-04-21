<template>
  <div class="inlandcity-container">
    <p class="inlandcity-tit">热门</p>
    <div class="inlandcity-main">
      <div class="inlandcity-swapper" ref="inlandcity-swapper">
        <ul class="inlandcity-cityuls">
          <li v-for="items in inland.hotlandlist" :key="items.value">{{items.name}}</li>
         <div v-for='(value,key) in inland.inlandlist' :key='key'>
            <p :id='key' class="cityLetter" >{{key}}</p>
            <li v-for='itemss in value' :key='itemss.value'>
                {{itemss.name}}
            </li>
         </div>
        </ul>
      </div>
      <ul class="inlandcity-letteruls">
        <p>热门</p>
        <li v-for='(value,key) in inland.inlandlist' @click='gocity(key)' :key='key'>{{key}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
import { getStarHotData, getFeatureData, getSelectData } from "@/api/stargety";
import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";
import {Indicator,Toast} from 'mint-ui';
import "mint-ui/lib/style.css";
BScroll.use(Pullup);
export default {
  data() {
    return {
      inland: {
        abroad: false,
        _json: "",
        _: 1587215148021,
        callback: "jsonp1",
        countryhotlist: [],
        inlandlist: {},
        hotlandlist: []
      }
    };
  },
  async created() {
    let inlandrs = await getStarHotData({
      abroad: this.inland.abroad,
      _json: this.inland._json,
      _: this.inland._,
      callback: this.inland.callback
    });
    this.inland.inlandlist = JSON.parse(
      inlandrs.data.slice(7, -2)
    ).data.cityList;
    this.inland.hotlandlist = JSON.parse(
      inlandrs.data.slice(7, -2)
    ).data.hotCityList;

    this.$nextTick(() => {
      this.initticketscroll();
    });
  },
  methods:{
       // 主体内容滚动效果
    initticketscroll() {
      this.bscroll = new BScroll(this.$refs["inlandcity-swapper"], {
        scrollY: true,
        pullUpLoad: true,
        click:true
      });
    },
    gocity(l){
         this.bscroll.scrollToElement(`#${l}`, 100);
    }
  }
};
</script>

<style lang="scss" scoped>
.inlandcity-container {
  flex: 1;
  background: #ebebeb;
  overflow: hidden;
  p.inlandcity-tit {
    height: 25px;
    line-height: 25px;
    margin-left: 16px;
    font-size: 15px;
    color: #555;
  }
  ul.inlandcity-cityuls li {
    height: 50px;
    line-height: 50px;
    font-size: 16px;
        border-top: 1px solid #ccc;
    width: 88%;
    color: #232323;
    /* margin-left: 5px; */
    background: white;
    padding-left: 15px;
  }
  .inlandcity-main {
    position: relative;
}

ul.inlandcity-letteruls {
    position: absolute;
    right: 3px;
    top: 103px;
    color: #1ba9ba;
}
}
ul.inlandcity-cityuls {
    width: 100%;
}

.inlandcity-container {
    display: flex;
    flex-direction: column;
}

.inlandcity-main {
    flex: 1;
    overflow: hidden;
}
p.cityLetter {
    height: 20px;
    font-size: 15px;
    line-height: 25px;
    font-size: 14px;
    color: #555;
    margin-left: 15px;
    line-height: 22px;
}
.inlandcity-swapper {
    height: 100%;
}
ul.inlandcity-letteruls li {
    text-align: center;
    font-size: 12px;
    margin: 4px 0;
}
</style>