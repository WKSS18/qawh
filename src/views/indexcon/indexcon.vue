<template>
  <div class="index-con">
    <!-- 今日特惠 -->
    <div class="index-special">
      <p class="spe-tit">
        <span class="tit-lf">今日特惠</span>
        <span class="tit-rf">
          <a href="#">更多特惠</a>
          <i class="iconfont spchange">&#xe7b3;</i>
        </span>
      </p>
      <ul class="spe-lis">
        <li class="spe-item" v-for="item in preference.prelist" :key="item.id">
          <img :src="item.img" alt />
          <p class="spe-tit">{{item.title}}</p>
          <p class="spe-them">{{item.theme}}</p>
          <p class="spe-price">
            ￥{{item.price}}
            <span>起</span>
          </p>
        </li>
      </ul>
    </div>

    <!-- 当季热门度假 -->
    <div class="index-hot">
      <p class="hot-tit">
        <i class="iconfont changetree">&#xe60a;</i>
        <span>当季热门度假</span>
      </p>

      <div class="hot-adr">
        <ul class="hot-lis">
          <li class="hot-item" v-for="item in hot.hotlist" :key="item.id">
            <img :src="item.img" alt />
            <p class="hot-them">
              <span>{{item.title}}</span>
            </p>
            <p class="hot-price">
              <span>￥{{item.price}}</span>
            </p>
            <div class="time-range">
              <p class="hot-range">{{item.section}}</p>
              <p class="hot-time">{{item.time}}天跟团游</p>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <!-- 广告区域 -->
    <AD></AD>

    <!-- 当季景点门票 -->
    <div class="index-screen">
      <p class="screen-tit">
        <span class="scrtit-lf">
          <i class="iconfont spchange">&#xe623;</i>
          <span>当季景点门票</span>
        </span>
        <span class="scrtit-rf">
          <span>更多特惠门票</span>
          <i class="iconfont spchange">&#xe7b3;</i>
        </span>
      </p>
      <div class="screen-con">
        <ul class="screen-lis">
          <li class="screen-item" v-for="item in screen.screenlist" :key="item.id">
            <img :src="item.img" alt />
            <p class="screen-titi">{{item.title}}</p>
            <p class="scree-them">{{item.theme}}</p>
            <p class="screen-price">
              ￥
              <em>{{item.price}}</em>
            </p>
          </li>
        </ul>
      </div>
    </div>

    <!-- 旅行攻略 -->
    <div class="index-travel">
      <p class="tarvel-tit">
        <span class="tarvel-lf">
          <i class="iconfont spchange">&#xe60d;</i>
          <span>旅行攻略</span>
        </span>
        <span class="tarvel-rf">
          <span>更多精彩攻略</span>
          <i class="iconfont spchange">&#xe7b3;</i>
        </span>
      </p>

      <div class="tarvel-con">
        <router-link
          tag="div"
          to="/index/child"
          class="travel-child"
          active-class="travel-active"
        >趣味亲子游</router-link>
        <router-link
          tag="div"
          to="/index/block"
          class="travel-block"
          active-class="travel-active"
        >旅拍也要出大片</router-link>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>


<script>
import { getPreData, getHotData, getScreenData } from "@/api/index.js";
import "@/assets/style/font.scss";
import AD from "@/components/ad.vue";
export default {
  data() {
    return {
      preference: {
        prelist: []
      },
      hot: {
        hotlist: []
      },
      screen: {
        screenlist: []
      }
    };
  },
  async created() {
    // 今日特惠数据请求
    let rs = await getPreData();
    this.preference.prelist = rs.data.preflist;

    // 热门度假数据请求
    let hotrs = await getHotData();
    this.hot.hotlist = hotrs.data.hotlist;

    // 景点数据请求
    let screes = await getScreenData();
    this.screen.screenlist = screes.data.sceniclist;
  },
  components: {
    AD
  }
};
</script>

<style lang="scss" scoped>
.spe-tit {
  display: flex;
  //   background: yellow;
  .tit-lf {
    display: block;
    width: 76px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    border-radius: 3px;
    color: #fff;
    background: #17c0c8;
    font-size: 13px;
    border: 1px solid #17c0c8;
    padding-bottom: 0;
  }
  .tit-rf {
    font-size: 12px;
    color: #757575;
    flex: 1;
    /* float: right; */
    display: block;
    text-align: right;
    height: 25px;
    line-height: 30px;
    padding-top: 5px;
    a {
      color: #757575;
    }
    .spchange {
      color: #10e9ac;
      margin-left: 8px;
    }
  }
}

.spe-lis {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .spe-item {
    width: 49%;
    margin: 5px 0 10px 0;
    img {
      width: 174px;
      height: 115px;
      border-radius: 10px;
    }
    .spe-tit {
      font-size: 14px;
      color: #000;
      line-height: 20px;
    }
    .spe-them {
      font-size: 13px;
      color: #555;
      overflow: hidden;

      line-height: 18px;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .spe-price {
      color: #ff7400;
      font-size: 18px;
      font-weight: bold;
      span {
        color: #ff7400;
        font-size: 14px;
        font-weight: normal;
      }
    }
  }
}

.index-hot {
  margin-top: 25px;
  .hot-tit {
    height: 42px;
    display: flex;
    line-height: 42px;
    margin-bottom: 13px;
    .changetree {
      color: #10e9ac;
      font-size: 23px;
    }
    span {
      color: #15161a;
      font-size: 18px;
      font-weight: 550;
      font-family: "Hiragino Sans GB", "\5FAE\8F6F\96C5\9ED1";
      margin-left: 8px;
    }
  }
  .hot-adr {
    .hot-lis {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .hot-item {
        width: 49%;
        position: relative;
        margin-bottom: 4px;
        img {
          width: 174px;
          height: 108px;
          border-radius: 8px;
        }
        .hot-them {
          line-height: 20px;
          span {
            margin-right: 5px;
            overflow: hidden;
            display: block;
            white-space: nowrap;
            text-overflow: ellipsis;
            font-size: 14px;
          }
        }
        .hot-price {
          span {
            color: #ff7400;
            font: bold 20px arial, sans-serif;
          }
        }
        .time-range {
          width: 80px;
          height: 34px;
          background: rgba(0, 0, 0, 0.6);
          text-align: center;
          padding-top: 6px;
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: -20px;
          margin: auto;
          .hot-range {
            font-size: 14px;
            line-height: 16px;
            font-weight: 400;
            color: white;
          }
          .hot-time {
            color: #ffde00;
            font-size: 12px;
            line-height: 17px;
            margin-right: 5px;
          }
        }
      }
    }
  }
}

.index-screen {
  margin-top: 15px;
  .screen-tit {
    height: 42px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .spchange {
      color: #10e9ac;
    }
    .scrtit-lf {
      span {
        color: #15161a;
        font-size: 18px;
        font-family: "Hiragino Sans GB", "\5FAE\8F6F\96C5\9ED1";
        font-weight: 550;
        margin-left: 5px;
      }
    }
    .scrtit-rf {
      span {
        font-family: "SimSun";
        font-size: 14px;
        color: #757575;
        margin-right: 5px;
      }
    }
  }
  .screen-con {
    img {
      width: 172px;
      height: 107px;
      border-radius: 5px;
      margin-bottom: 5px;
    }
    p.screen-titi {
      line-height: 15px;
      padding-top: 0.05rem;
      font-size: 14px;
      color: #000;
    }

    p.scree-them {
      height: auto !important;
      font-size: 13px;
      font-weight: 100;
      color: #555;
      margin-bottom: 0 !important;
      line-height: 25px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    p.screen-price {
      font-size: 18px;
      color: #ff7400;
    }

    ul.screen-lis {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    li.screen-item {
      width: 49%;
      margin-bottom: 10px;
    }
  }
}

.index-travel {
  .spchange {
    color: #10e9ac !important;
  }
  span.tarvel-lf span {
    color: #15161a;
    font-size: 18px;
    font-family: "Hiragino Sans GB", "\5FAE\8F6F\96C5\9ED1";
    font-weight: 550;
    margin-left: 8px;
  }

  span.tarvel-rf span {
    font-family: "SimSun";
    font-size: 14px;
    color: #757575;
    margin-right: 5px;
  }

  p.tarvel-tit {
    height: 42px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.tarvel-con {
  display: flex;
}

.travel-child,
.travel-block {
  // width: 82px;
  padding: 0 10px;
  height: 30px;
  margin-right: 5px;
  border: 1px solid #d7d7d7;
  border-radius: 3px;
  text-align: center;
  line-height: 30px;
  color: #666;
  border: 1px solid #000;
}

.travel-active {
  background: #17c0c8;
  border: 1px solid #17c0c8;
  color: #fff;
}
</style>