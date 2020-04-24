<template>
  <div class="main-container">
    <!-- 主体内容区域滚动效果 -->
    <div class="index-wrapper" ref="index-wrapper" v-show="$store.state.isshowmain">
      <div class="index-con">
        <header>
          <div class="index-search">
            <div>
              <i class="iconfont">&#xe65d;</i>
              <input class="indexsea" type="text" @click="ticksearch" readonly placeholder="搜索景点门票" />
            </div>
            <i class="iconfont index-location" @click='$router.push("/profile")'>&#xe64a;</i>
          </div>

          <div class="qn-touchhead">
            <ul class="qn-touchlis">
              <li
                class="qn-touchitem"
                v-for="item in touchlist.datalist"
                :key="item.id"
                @click="routego(item)"
              >
                <img :src="item.img" alt />
                <span>{{item.title}}</span>
              </li>
            </ul>
          </div>
        </header>

        <main>
          <IndexCon></IndexCon>
        </main>
      </div>
    </div>

    <TickSearch v-show="$store.state.isshowsearch"></TickSearch>

    <footer>
      <ul class="footer-nav">
        <router-link tag="li" to="/" active-class="active">
          <i class="iconfont launched">&#xe61d;</i>
          <span>首页</span>
        </router-link>
        <router-link tag="li" to="/order/orderall" active-class="active">
          <i class="iconfont">&#xe618;</i>
          <span>订单</span>
        </router-link>
        <router-link active-class="active" tag="li" to="/profile">
          <i class="iconfont">&#xe64a;</i>
          <span>我的</span>
        </router-link>
        <router-link tag="li" to="/" active-class="active">
          <i class="iconfont">&#xe61a;</i>
          <span>APP下载</span>
        </router-link>
      </ul>
    </footer>
  </div>
</template>


<script>
import { getIndexData } from "@/api/index.js";
import "@/assets/style/common.scss";
import "@/assets/style/font.scss";
import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";
import IndexCon from "./indexcon/indexcon";
import TickSearch from './ticket/ticksearch'
BScroll.use(Pullup);

export default {
  data() {
    return {
      touchlist: {
        datalist: []
      },
      // // 维护两个状态，搜索页和主页切换
      // isshowmain:true,
      // isshowsearch:false
    };
  },
  components: {
    IndexCon,
    TickSearch
  },
  async created() {
    let rs = await getIndexData();
    this.touchlist.datalist = rs.data.datalist;
  },
  mounted() {
    this.$nextTick(() => {
      // this.initBscroll();
    });
  },
  methods: {
    routego(chunk) {
      // 首页头部导航路由跳转
      let rout = this.$router.options.routes.filter(item => {
        if (item.meta) {
          return item.meta.title === chunk.title;
        }
      });
      if (rout.length > 0) {
        this.$router.push(rout[0].path);
      }
    },

    // 底部导航路由跳转
    goroute() {
      // if(this.pre) this.pre.style.color = "#000";
    },

    // 滚动效果
    initBscroll() {
      this.bscroll = new BScroll(this.$refs["index-wrapper"], {
        scrollY: true,
        pullUpLoad: true,
        click: true
      });
      // 首页图标替换效果
      this.bscroll.on("scroll", event => {
        if (event.y < -300) {
          document.querySelector(".launched").innerHTML = "&#xe62c;";
        } else {
          document.querySelector(".launched").innerHTML = "&#xe61d;";
        }
      });
    },

      // 门票搜索
      ticksearch(){
         this.$store.commit('SET_TICKSHOW',true);
      }
  }
};
</script>

<style lang="scss" socped>
.main-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  .index-wrapper {
    flex: 1;
    overflow: hidden;
    overflow: auto;
  }
  .qn-touchhead {
    padding-top: 10px;
    height: 290px;
    .qn-touchlis {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      .qn-touchitem {
        display: flex;
        width: 20%;
        flex-direction: column;
        align-items: center;
        text-align: center;
        margin: 7px 0;
        img {
          width: 28px;
          height: 28px;
        }
        &:nth-child(1) {
          img {
            width: 51px;
            height: 51px;
          }
        }
        &:nth-child(2) {
          img {
            width: 51px;
            height: 51px;
          }
        }
        &:nth-child(3) {
          img {
            width: 51px;
            height: 51px;
          }
        }
        &:nth-child(4) {
          img {
            width: 51px;
            height: 51px;
          }
        }
        &:nth-child(5) {
          img {
            width: 51px;
            height: 51px;
          }
        }
        span {
          font-size: 12px;
          color: #333;
          margin-top: 7px;
        }
      }
    }
  }

  main {
    padding: 0 8px;
  }
  footer {
    height: 50px;

    .footer-nav {
      height: 100%;
      display: flex;
      align-items: center;
    }

    .footer-nav {
      li {
        text-align: center;
        flex: 1;
        display: flex;
        flex-direction: column;
        &:first-child {
          color: #18c0c8;
        }
        &:last-child {
          flex-direction: row;
          justify-content: center;
          color: #18c0c8;
          margin: 9px 12px;
          border: 1px solid #18c0c8;
          border-radius: 20px;
          line-height: 30px;
          padding: 0 5px;

          span {
            margin-top: 0;
          }
        }
        span {
          margin-top: 5px;
        }
      }
    }
  }
  // .active{
  //   color: #18c0c8;
  // }
  .router-link-active {
    color: #18c0c8;
  }
}
.index-search {
  height: 36px;
}
input.indexsea {
  border: none;
  background: #eee;
  width: 250px;
  margin-left: 5px;
  height: 36px;
}
.index-search {
  display: flex;
}
.index-search div {
  width: 295px;
  width: 3052p;
  border-radius: 3px;
  border: 0 none;
  padding-left: 10px;
  background-color: #eee;
}
i.iconfont.index-location {
  line-height: 36px;
  margin-left: 15px;
  color: #00bcd4 !important;
}
.index-search {
  margin-left: 12px;
}
input.indexsea {
    outline: none;
}
.main-container .index-wrapper {
    margin-top: 10px;
}
input.indexsea {
    font-size: 15px;
    color: #a5a5a5;
    padding-left: 7px;
}
</style>