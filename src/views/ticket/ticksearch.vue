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
  </div>
</template>

<script>
import { getTickData } from "@/api/index";
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
      }, 500);
    },
    async getticklist(value) {
      //   发送请求
      let ticketrs = await getTickData({
        city: this.ticketsearch.city,
        input: value,
        ip: this.ticketsearch.ip,
        requestType: this.ticketsearch.requestType
      });
      console.log(this.ticketrs);
    },
    // 取消
    clearsearch() {
      event.currentTarget.previousElementSibling.value = "";
    }
  }
};
</script>
<style lang="scss" scoped>
.ticksearch {
  flex: 1;
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
</style>