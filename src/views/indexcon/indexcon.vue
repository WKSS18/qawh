<template>
  <div class="index-con">
    <!-- 今日特惠 -->
    <div class="index-special">
      <p class="spe-tit">
        <span class="tit-lf">今日特惠</span>
        <span class="tit-rf">
          <a href="#">更多特惠</a>
          <span>
            <i>></i>
          </span>
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
        <i class="iconfont changetree">&#xe61c;</i>
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
  </div>
</template>


<script>
import { getPreData, getHotData } from "@/api/index.js";
import "@/assets/style/font.scss";
import AD from "@/components/ad.vue"
export default {
  data() {
    return {
      preference: {
        prelist: []
      },
      hot: {
        hotlist: []
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
  },
  components:{
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
    span {
      display: inline-block;
      width: 16px;
      background: #00d0d4;
      position: relative;
      color: white;
      height: 16px;
      margin-top: 8px;
      border-radius: 50%;
      i {
        position: absolute;
        left: 3px;
        top: -9px;
      }
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


</style>