<template>
  <div class="block">
    <el-carousel height="150px" arrow="never" autoplay="true">
      <el-carousel-item v-for="(item,index) in bannerlist" :key="index">
        <img :src="item" alt />
      </el-carousel-item>
    </el-carousel>
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
  height: 117px;
  overflow: hidden;
  img {
    width: 100%;
    height: 117px;
    border-radius: 5px;
  }
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
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
</style>