<template>
  <div class="boardcity-container">
    <p class="boardcity-tit">热门</p>
    <div class="boardcity-main">
      <div class="boardcity-swapper" ref="boardcity-swapper">
        <ul class="boardcity-cityuls">
          <li v-for="items in board.boardlandlist" :key="items.value">{{items.name}}</li>
         <div v-for='(value,key) in board.boardlist' :key='key'>
            <p :id='key' class="cityLetter" >{{key}}</p>
            <li v-for='itemss in value' :key='itemss.value'>
                {{itemss.name}}
            </li>
         </div>
        </ul>
      </div>
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
      board: {
        abroad: false,
        _json: "",
        _: 1587215148021,
        callback: "jsonp1",
        countryhotlist: [],
        boardlist: {},
        boardlandlist: []
      }
    };
  },
  async created() {

    let boardhotrs = await getStarHotData({
      abroad: true,
      _json: this.board._json,
      _: 1587218321107,
      callback: this.board.callback
    });


    this.board.boardlist = JSON.parse(boardhotrs.data.slice(7, -2)).data.cityList;
    this.board.boardlandlist = JSON.parse(boardhotrs.data.slice(7, -2)).data.hotCityList;

    this.$nextTick(() => {
      this.initticketscroll();
    });
  },
  methods:{
       // 主体内容滚动效果
    initticketscroll() {
      this.bscroll = new BScroll(this.$refs["boardcity-swapper"], {
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
.boardcity-container {
  flex: 1;
  background: #ebebeb;
  overflow: hidden;
  p.boardcity-tit {
    height: 25px;
    line-height: 25px;
    margin-left: 16px;
    font-size: 15px;
    color: #555;
  }
  ul.boardcity-cityuls li {
    height: 50px;
    line-height: 50px;
    font-size: 16px;
        border-top: 1px solid #ccc;
    // width: 88%;
    color: #232323;
    /* margin-left: 5px; */
    background: white;
    padding-left: 15px;
  }
  .boardcity-main {
    position: relative;
}

ul.boardcity-letteruls {
    position: absolute;
    right: 3px;
    top: 103px;
    color: #1ba9ba;
}
}
ul.boardcity-cityuls {
    width: 100%;
}

.boardcity-container {
    display: flex;
    flex-direction: column;
}

.boardcity-main {
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
.boardcity-swapper {
    height: 100%;
}
ul.boardcity-letteruls li {
    text-align: center;
    font-size: 12px;
    margin: 4px 0;
}
</style>