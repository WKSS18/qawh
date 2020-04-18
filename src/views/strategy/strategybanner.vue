<template>
  <div class="strategy-block">
    <el-carousel class="stragety-bord" trigger="click" arrow="never">
      <el-carousel-item class="stragety-hig" v-for="(item,index) in bannerlist" :key="index">
        <img :src="item.img" />
        <span>{{item.tit}}</span>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  data() {
    return {
      bannerlist: [
          {
              img:"https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/9a544bdc6eca35012fdb91464a67bdd7.jpg_r_640x290x70_907c8b7b.jpg",
              tit:"被大洋湾的春色所陶醉"
          },
          {
              img:"https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/495cd564da9481461f190b6734ed911d.jpg_r_640x290x70_91b64ff2.jpg",
              tit:"2020,怀念苏韵满怀"
          },
          {
              img:"https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/5093c7f54a5a12c3cb63de0a4736c8aa.jpg_r_640x290x70_4e50a783.jpg",
              tit:"慢行捷奥┃我的童话我的国"
          },
          {     
              img:"https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/fc093df234b2138b773157c2e35868be.jpg_r_640x290x70_71e1ce8f.jpg",
              tit:"探寻隐藏的小众秘境（怀化篇）"
          },{
              img:"https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/7333214278a0111f37c2c4396ede7cca.jpg_r_640x290x70_abe9f8ce.jpg",
              tit:"乐不思蜀——川蜀双城记"
          }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.strategy-block {
  position: relative;
  height: 170px;
  span {
    z-index: 2;
    position: absolute;
    bottom: 0;
    color: white;
    left: 6px;
    font-size: 14px;
    bottom: 4px;
  }
  img {
    width: 100%;
    height: 170px;
  }
  /deep/.el-carousel__button {
    width: 5px;
    height: 5px;
    border-radius: 50%;
  }
  .stragety-hig {
    height: 170px;
  }
  .stragety-bord{
      border-radius: 0;
  }
  /deep/.el-carousel__indicators.el-carousel__indicators--horizontal {
    left: 80%!important;
}

}
</style>