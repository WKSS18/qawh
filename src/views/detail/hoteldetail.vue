<template>
  <div class="hoteldetail-container">
      <i class="iconfont hoteldetailak" @click="$router.go(-1)">&#xe928;</i>
      <div class="hoteldetail-head">
          <ul class="hoteldetail-uls">
              <li class="hoteldetail-imgs" v-for='(item,index) in hoteldetail.hotelmsglist.picView' :key='index'>
                  <img :src="item" alt="">
              </li>
          </ul>
      </div>
      <p class="hoteldetail-title">
          {{hoteldetail.hoteldetailmsg.cnName}}
      </p>
  </div>
</template>
<script>
import { getHotelDetailData } from "@/api/hotel";
import '@/assets/style/common.scss'
import '@/assets/style/reset.scss'
export default {
  data() {
    return {
      hoteldetail: {
        checkInDate: "",
        checkOutDate: "",
        cityUrl: "",
        extra: "",
        keywords: "",
        location: "",
        seq: "",
        hotelmsglist:[],
        hoteldetailmsg:{}
      }
    };
  },
  async created() {
    let hotelsea = location.search.split("?")[1].split("&");
    let hotelobj = {};
    for (let i = 0; i < hotelsea.length; i++) {
      let hotelval = hotelsea[i].split("=");
      //   对中文字符解码
      if (hotelval[0] === "extra") {
        hotelval[1] = decodeURIComponent(hotelval[1]);
      }
      hotelobj[hotelval[0]] = hotelval[1];
    }
    let hoteldetailrs = await getHotelDetailData({
      checkInDate: hotelobj.checkInDate,
      checkOutDate: hotelobj.checkOutDate,
      cityUrl: hotelobj.cityUrl,
      extra: hotelobj.extra,
      keywords: "",
      location: "",
      seq: hotelobj.seq
    });
  
    this.hoteldetail.hotelmsglist = hoteldetailrs.data.data; 
    this.hoteldetail.hoteldetailmsg = hoteldetailrs.data.data.dinfo;
    console.log(this.hoteldetail.hotelmsglist);
  }
};
</script>

<style lang="scss" scoped>
    li.hoteldetail-imgs img {
    width: 100%;
    height: 100%;
}

ul.hoteldetail-uls {
    list-style: none;
    margin: 0;
    padding: 0;
    height: 196px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

li.hoteldetail-imgs {
       width: 32.3%;
    height: 47%;
}
p.hoteldetail-title {
    font-size: 16px;
    color: #212121;
    font-family: PingFangSC-Regular,MicroSoft YaHei,"sans-serif";
    padding: 10px;
}
.hoteldetail-container {
    position: relative;
}

i.iconfont.hoteldetailak {
    position: absolute;
    color: white;
    font-size: 30px;
    padding: 10px;
}
</style>
