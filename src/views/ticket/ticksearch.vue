<template>
  <div class="ticksearch">
    <div class="ticksearch-head">
      <span class="ticksearch-back" @click="tickback">
        <i class="iconfont" style="color:#9fa2a3">&#xe928;</i>
      </span>
      <div class="ticksearch-keyword">
        <i class="iconfont" style="margin-left:10px">&#xe503;</i>
        <input type="text" v-model="seakeyword" @input="getkeyword" />
        <i class="iconfont" style="margin-right:10px;color:#d4d4d4" @click="clearsearch">&#xe60f;</i>
      </div>
      <span class="ticksearch-cancel" @click="tickback">取消</span>
    </div>

    <div class="ticksearch-views" ref="ticksaerch-swapper">
      <ul class="ticksearch-list">
        <li class="ticksearch-item" @click='godetail(item.schemeUrl)' v-for="item in ticketsearch.ticketlist" :key="item.productID">
          <span class="tickitem-img">
            <img src="//s.qunarzz.com/homenode/images/bigsearch/ticket.png" alt />
          </span>
          <span class="ticketitem-con">
            <span class="tickitem-title">{{item.text}}</span>
            <span class="tickitem-claaify">{{item.hint}}</span>
          </span>

          <span class="tickitem-price" v-show="item.price">
            <span>￥{{item.price}}</span>起
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getTickData } from "@/api/index";
import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";

BScroll.use(Pullup);
export default {
  data() {
    return {
      seakeyword: "",
      ids: 0,
      ticketsearch: {
        ticketlist: [],
        city: "北京",
        input: "",
        ip: "223.104.109.133",
        requestType: "touch"
      }
    };
  },
  created() {
    this.$nextTick(() => {
      this.initticketscroll();
    });
  },
  methods: {
    // 维护状态进行视图的切换
    tickback() {
      this.$store.commit("SET_TICKSHOW", false);
      this.$router.push("/index");
    },
    // 实时获取输入框的值
    getkeyword() {
      this.keyword = event.currentTarget.value;
      //   节流
      if (this.ids) return;
      this.ids = setTimeout(() => {
        this.seakeyword = this.keyword;
        this.ids = null;
        clearTimeout(this.ids);
        this.getticklist(this.seakeyword);
      }, 200);
    },
    async getticklist(value) {
      //   发送请求
      let ticketrs = await getTickData({
        city: this.ticketsearch.city,
        input: value,
        ip: this.ticketsearch.ip,
        requestType: this.ticketsearch.requestType
      });
      this.ticketsearch.ticketlist = ticketrs.data.data.suggestions;
    },
    // 取消
    clearsearch() {
      event.currentTarget.previousElementSibling.value = "";
    },

    // 主体内容滚动效果
    initticketscroll() {
      this.bscroll = new BScroll(this.$refs["ticksaerch-swapper"], {
        scrollY: true,
        pullUpLoad: true,
        click:true
      });
    },
    godetail(itemid){
      let id = itemid.split('=')[1];
      location.href = '/piaodetail.html?'+id
    }
  }
};
</script>
<style lang="scss" scoped>
.ticksearch {
  flex: 1;
}

.ticksearch {
  height: 100%;
}
.ticksearch-head {
  display: flex;
  align-items: center;
  height: 54px;
}
.ticksearch-keyword {
  flex: 1;
}
span.ticksearch-back {
  margin: 0 12px;
}
.ticksearch-keyword {
  background: #f4f4f4;
  border-radius: 4px;
  height: 28px;
  display: flex;
  align-items: center;
}
.ticksearch-keyword input {
  flex: 1;
  outline: none;
  line-break: 28px;
  padding-left: 10px;
}
span.ticksearch-cancel {
  font-size: 15px;
  margin: 0 15px;
}
.ticksearch-keyword input {
  background: #f4f4f4;
  border: none;
}
.ticksearch {
  display: flex;
  flex-direction: column;
}
.ticksearch-views {
  flex: 1;
  margin-top: 20px;
  overflow: hidden;
}
span.tickitem-img img {
  width: 22px;
}
span.tickitem-title {
  color: #3f4548;
  font-size: 15px;
  font-weight: bold;
}
li.ticksearch-item {
  display: flex;
}
span.tickitem-claaify {
  color: #9fa2a3;
  font-size: 12px;
}
span.tickitem-img {
  margin: 0 15px;
}
li.ticksearch-item {
  line-height: 22px;
  margin-top: 22px;
}
span.tickitem-price span {
  color: #ff8300;
  font-size: 15px;
  font-weight: bold;
}
span.tickitem-price {
  color: black;
}
span.tickitem-claaify {
  margin-left: 10px;
}
span.ticketitem-con {
  width: 62%;
}
span.tickitem-price {
  text-align: right;
  flex: 1;
  margin-right: 13px;
}
span.tickitem-price span {
  margin: 0 4px;
}
</style>