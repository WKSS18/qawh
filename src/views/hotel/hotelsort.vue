<template>
  <div class="hotelsort-container">
    <ul>
      <li>推荐排序</li>
      <li>好评优先</li>
      <li>低价优先</li>
      <li>高价优先</li>
      <li>评论数优先</li>
    </ul>
  </div>
</template>


<script>
export default {

    data(){
       return{

       }
    },
    created(){

    }
}
</script>

<style lang="scss" scoped>
    .hotelsort-container {
    position: absolute;
    top: 13%;
    background: white;
    width: 100%;
    z-index: 1;
    height: 229px;
}

.hotelsort-container ul li {
    height: 38.5px;
    line-height: 38.5px;
    margin-left: 11px;
    font-size: 14px;
    border-bottom: 1px solid #ccc;
}

.hoteldetail-tabbase {
    box-shadow: 1px 1px 1px 1px #ccc;
}
</style>