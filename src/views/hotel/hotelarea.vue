<template>
  <div class="hotelarea-container">
    <div class="hotelarealf">
      <ul class="hotelarealflis">
        <li v-for="item in hotelarealist" @click="changeview(item)" :key="item.id">{{item.name}}</li>
      </ul>
    </div>
    <div class="hotelarearg" ref="hotelarearg-wrapper">
      <div class="hotelarea-mainone">
        <ul class="hotelarearflis">
          <li v-for="(itemss,index) in hotellocationlist" :key="index">{{itemss}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { getHotelAreaData } from "@/api/hotel";
import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";
BScroll.use(Pullup);
export default {
  data() {
    return {
      hotelarealist: [],
      hotellocationlist: [],
      showlis:false,
      pre:''
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.initBscroll();
    });
  },
  async created() {
    let hotelarears = await getHotelAreaData();
    this.hotelarealist = hotelarears.data.arealist;
  },
  methods: {
    initBscroll() {
      this.bscroll = new BScroll(this.$refs["hotelarearg-wrapper"], {
        scrollY: true,
        pullUpLoad: true,
        click: true
      });
    },
    changeview(items) {
      let seachlist = this.hotelarealist.filter(item => {
        return item.id === items.id;
      });
      this.hotellocationlist = seachlist[0].lists;
      if(this.pre)this.pre.style.background='#eee';
      this.pre = Array.from(event.target.parentElement.children)[Array.from(event.target.parentElement.children).indexOf(event.target)]
      this.pre.style.background='#fff';
    }
  }
};
</script>
<style lang="scss" scoped>
.hotelarea-container {
  position: absolute;
}

.hotelarealf {
  width: 25%;
  background: #eee;
  height: 100%;
}

.hotelarea-container {
  width: 100%;
  position: absolute;
  top: 86px;
  z-index: 20;
  background: white;
  height: 350px;
}

ul.hotelarealflis li {
  height: 42px;
  font-size: 14px;
  line-height: 42px;
  padding-left: 15px;
  color: #616161;
}
.hotelarea-container {
  display: flex;
}

ul.hotelarearflis li {
  height: 57px;
  line-height: 57px;
  font-size: 15px;
  margin-left: 20px;
  border-bottom: 1px solid #eee;
  margin-right: 20px;
}

.hotelarearg {
  flex: 1;
}
.hotelarearg {
  overflow: hidden;
}
.active{
    background: white;
}
</style>