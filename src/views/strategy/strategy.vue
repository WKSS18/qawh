<template>
  <div class="strategy-container">
    <div>
      <div class="stargety-header">
        <i class="iconfont stargety-bak" @click="$router.push('/index')" style="font-size:25px">&#xe928;</i>
        <span class="stargety-title">去哪儿攻略</span>
        <span class="stargety-record">
          <i class="iconfont stargety-mine" style="font-size:20px">&#xe67b;</i>
          我的游记
        </span>
      </div>

      <div class="stargety-search">
        <div class="stargety-bourn">
          <i class="iconfont" style="color:#ddd;font-size:15px">&#xe503;</i>
          <input type="text" placeholder="请输入目的地进行搜索" />
        </div>
      </div>

      <div class="stargety-banner">
        <StrategyBanner></StrategyBanner>
      </div>

      <div class="stargety-tag">
        <span class="stargety-travel">去哪儿旅行榜</span>
        <span class="stargety-questions">达人问答</span>
      </div>
      <div class="stargety-ship"></div>

      <div class="stargety-operation">
        <span class="stargety-timeout">
          <i class="iconfont" style="color:#1ba9ba;font-size:13px">&#xe61b;</i>
          操作超时
        </span>
        <span class="stargety-location">重新定位</span>
      </div>
      <div class="stargety-ship"></div>
      <!-- 最近浏览 -->
      <div class="stragety-recently">
        <span>最近浏览</span>
        <ul class="stragety-reclist">
          <li v-for="item in cityrecentylist" :key="item.id">{{item.name}}</li>
        </ul>
      </div>

      <div class="stargety-ship"></div>
      <!-- 国内热门 -->
      <div class="stragety-hotcity">
        <span>国内热门</span>
        <ul class="stragety-hotlist">
          <li v-for="item in countryhot.countryhotlist" :key="item.value">{{item.name}}</li>
        </ul>
        <p>查看更多</p>
      </div>
      <div class="stargety-ship"></div>
      <!-- 国外热门 -->
      <div class="stragety-boardhotcity">
        <span>国外热门</span>
        <ul class="stragety-boardhotlist">
          <li v-for="item in countryhot.boardhotlist" :key="item.value">{{item.name}}</li>
        </ul>
        <p>查看更多</p>
      </div>

      <!-- 特色玩法 -->
      <div class="stargety-featrue">
        <span class="stargety-theme">特色玩法</span>
        <ul class="stargety-fealist">
          <li v-for="item in featureplay.featurelist" :key="item.id">
            <img :src="item.imageUrl" alt />
            <span class="feature-cru"></span>
            <p class="feature-country">{{item.commonDistName}}</p>
            <p class="feature-title">{{item.title}}</p>
          </li>
        </ul>
      </div>
      <div class="clear-both"></div>
      <div class="stargety-ship"></div>
      <!-- 坐着火车去旅行 -->
      <div class="stargety-train">
        <div class="stargety-trainlf">
          <p class="stargety-row1">
            <span class="stargety-sittrain">坐着火车</span>去旅行
          </p>
          <p class="stargety-row2">火车直达旅游目的地推荐</p>
        </div>

        <div class="stargety-trainrf">
          <img src="//s.qunarzz.com/travel/touch/train-trip.png" alt />
        </div>
      </div>
      <div class="stargety-ship"></div>
      <!-- 精选内容 -->
      <div class="stargety-selected">
        <p class="stargety-seltit">精选内容</p>
        <Select></Select>
      </div>
    </div>
  </div>
</template>

<script>
import StrategyBanner from "./strategybanner";
import Select from "./selectItem";
import { getStarHotData, getFeatureData, getSelectData } from "@/api/stargety";
export default {
  data() {
    return {
      stargetybanner: [],
      cityrecentylist: [],
      countryhot: {
        abroad: false,
        _json: "",
        _: 1587215148021,
        callback: "jsonp1",
        countryhotlist: [],
        boardhotlist: []
      },
      featureplay: {
        RN: 1,
        needRecommandTag: 1,
        useConfigLabelGroup: 1,
        type: 3,
        featurelist: []
      }
    };
  },
  async created() {
    //   最近浏览的数据，从localStroage中获取
    if (localStorage.historyname.length === 0) {
      this.cityrecentylist.length = 4;
    } else {
      this.cityrecentylist =
        JSON.parse(localStorage.historyname).length < 4
          ? JSON.parse(localStorage.historyname)
          : JSON.parse(localStorage.historyname).slice(
              JSON.parse(localStorage.historyname).length - 4
            );
    }

    //  国内热门数据获取
    let countryhotrs = await getStarHotData({
      abroad: this.countryhot.abroad,
      _json: this.countryhot._json,
      _: this.countryhot._,
      callback: this.countryhot.callback
    });
    this.countryhot.countryhotlist = JSON.parse(
      countryhotrs.data.slice(7, -2)
    ).data.hotCityList.slice(0, 12);

    // 国外热门数据获取
    let boardhotrs = await getStarHotData({
      abroad: true,
      _json: this.countryhot._json,
      _: 1587218321107,
      callback: this.countryhot.callback
    });
    this.countryhot.boardhotlist = JSON.parse(
      boardhotrs.data.slice(7, -2)
    ).data.hotCityList.slice(0, 12);

    // 特色玩法数据获取
    let featurers = await getFeatureData({
      RN: this.featureplay.RN,
      needRecommandTag: this.featureplay.needRecommandTag,
      useConfigLabelGroup: this.featureplay.useConfigLabelGroup,
      type: this.featureplay.type
    });
    this.featureplay.featurelist = featurers.data.data.list[0].list;
  },

  components: {
    StrategyBanner,
    Select
  }
};
</script>

<style lang="scss" scoped>
.stargety-header {
  background-color: #25a4bb;
  position: relative;
  height: 46px;
  color: white;
  width: 100%;
}
.stargety-header {
  display: flex;
  align-items: center;
}
i.iconfont.stargety-bak {
  padding: 10px;
}
span.stargety-record {
  display: flex;
  flex-direction: column;
  margin-right: 9px;
  justify-content: center;
  text-align: center;
}
span.stargety-title {
  flex: 1;
  font-size: 16px;
  text-align: center;
  font-family: "microsoft yahei";
}
.stargety-search {
  height: 49px;
  background: #25a4bb;
  display: flex;
  justify-content: center;
  align-items: center;
}
.stargety-ship {
  border-top: 5px solid #f3f3f3;
}
.stargety-bourn {
  width: 95%;
  height: 29px;
  background: white;
  border-radius: 6px;
  line-height: 35px;
  text-align: center;
}
.stargety-bourn input {
  border: none;
  color: #b5b6b6;
  outline: none;
  width: 160px;
  font-size: 14px;
}

.stargety-tag {
  display: flex;
  align-items: center;
  height: 40px;
}

.stargety-tag span {
  flex: 1;
  text-align: center;
  color: #1ba9ba;
  line-height: 40px;
  font-size: 15px;
}
.stargety-operation {
  height: 31px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.stargety-operation span {
  flex: 1;
  line-height: 31px;
  color: #1ba9ba;
  font-size: 14px;
}
span.stargety-timeout {
  margin-left: 15px;
}
span.stargety-location {
  text-align: right;
  margin-right: 8px;
}
ul.stragety-reclist {
  display: flex;
  height: 40px;
}

ul.stragety-reclist li {
  flex: 1;
  border: solid 1px #e7e7e5;
}
.stragety-recently,
.stragety-hotcity,
.stragety-boardhotcity {
  span {
    height: 31px;
    display: block;
    line-height: 31px;
    font-size: 14px;
    margin-left: 9px;
  }
}
ul.stragety-reclist li {
  text-align: center;
  line-height: 35px;
  font-size: 15px;
}

ul.stragety-hotlist,
.stragety-boardhotlist {
  display: flex;
  flex-wrap: wrap;
}
ul.stragety-hotlist,
.stragety-boardhotlist {
  li {
    width: 25%;
    box-sizing: border-box;
    text-align: center;
    height: 40px;
    line-height: 40px;
    border: solid 1px #e7e7e5;
  }
}
.stragety-hotcity,
.stragety-boardhotcity {
  p {
    display: block;
    padding: 12px 0;
    color: #1ba9ba;
    line-height: 16px;
    font-size: 15px;
    text-align: center;
    border-bottom: 1px solid #e7e7e5;
  }
}

ul.stargety-fealist li img {
  width: 171px;
  border-radius: 5px;
  height: 115px;
}
ul.stargety-fealist {
  li {
    .feature-title {
      font-size: 16px;
    }
    &:first-child {
      .feature-title {
        font-size: 20px;
      }
      img {
        height: 241px;
        width: 171px;
      }
    }
  }
}
ul.stargety-fealist li {
  width: 45%;
  float: left;
  margin-left: 11px;
}
ul.stargety-fealist li {
  position: relative;
}
ul.stargety-fealist li p {
  position: absolute;
}
p.feature-country {
  top: 0;
  right: 0;
  right: 5px;
  top: 5px;
  display: inline-block;
  width: 42px;
  height: 17.5px;
  background: #fff;
  border-radius: 3px;
  font-size: 11px;
  color: #333;
  letter-spacing: 0.61px;
  text-align: center;
  line-height: 17px;
}

p.feature-title {
  bottom: 0;
}

p.feature-title {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px 10px 0 10px;
  font-size: 20px;
  color: #fff;
  letter-spacing: 0.55px;
  line-height: 24px;
  z-index: 100;
  overflow: hidden;
  max-height: 72px;
  margin-bottom: 10px;
  font-family: "microsoft yahei";
}

ul.stargety-fealist li {
  margin-bottom: 10px;
}
span.stargety-theme {
  display: block;
  height: 32.5px;
  line-height: 32.5px;
  margin-top: 20px;
  font-size: 23px;
  color: #333;
  margin-left: 11px;
  font-family: "microsoft yahei";
  margin-bottom: 15px;
}
ul.stargety-fealist {
  height: 241px;
  margin-bottom: 20px;
}
.clear-both {
  clear: both;
}
p.stargety-trainrf img {
  width: 80px;
  height: 70px;
}

.stargety-train {
  display: flex;
  align-items: center;
}

p.stargety-trainlf span {
  font-size: 19px;
  color: #333;
}
p.stargety-row1 {
  font-size: 19px;
  font-family: "microsoft yahei";
}

span.stargety-sittrain {
  color: #50a6b7;
}

p.stargety-row2 {
  font-size: 14px;
  font-family: "microsoft yahei";
  margin-top: 8px;
}

.stargety-trainrf img {
  width: 80px;
}

.stargety-trainlf {
  flex: 1;
  margin-left: 18px;
  margin-top: 5px;
}
.stargety-train {
  height: 85px;
}

p.stargety-seltit {
  font-size: 23px;
  padding-top: 25px;
  text-align: center;
  margin-bottom: 25px;
}

.strategy-container {
  height: 100%;
  overflow: hidden;
}
</style>