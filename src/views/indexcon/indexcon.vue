<template>
  <div class="index-con">
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
  </div>
</template>


<script>
import { getPreData } from "@/api/index.js";
export default {
  data() {
    return {
      preference: {
        prelist: []
      }
    };
  },
  async created() {
    let rs = await getPreData();
    console.log(rs);
    this.preference.prelist = rs.data.preflist;
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
    margin: 5px 0;
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
</style>