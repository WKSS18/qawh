<template>
  <div class="block">
    <el-carousel trigger="click" arrow='never'>
      <el-carousel-item   v-for="(item,index) in bannerlist" :key="index">
        <img :src="item" />
      </el-carousel-item>
    </el-carousel>
    <span>广告</span>
  </div>


</template>
<script>
export default {
  data() {
    return {
      bannerlist: [
        "//imgs.qunarzz.com/vc/44/e9/86/95bc36c9e1c06ebd68bdfe222e.jpg_92.jpg",
        "//imgs.qunarzz.com/vc/6d/9f/35/b8ad5468f73fd60ec0ced086f6.jpg_92.jpg",
        "//imgs.qunarzz.com/vc/e3/a1/71/f498dfd3bed948d623c9093252.jpg_92.jpg"
      ]
    };
  }
};
</script>
<style lang="scss">
.block {
  margin-top: 20px;
  position: relative;
  height:117px;
  span {
    z-index: 2;
    position: absolute;
    bottom: 0;
    color: white;
    left: 6px;
  }
  img {
    width: 100%;
    height: 117px;
    border-radius: 5px;
  }
}
button.el-carousel__button {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
.el-carousel.el-carousel--horizontal {
  border-radius: 5px;
}
.el-carousel__container {
  height: 117px !important;
}
.el-carousel.el-carousel--horizontal {
    height: 100%;
}
.el-carousel__container {
    height: 100%;
}
.el-carousel__container {
    height: 100%;
}

</style>