<template>
  <div class="hotel-detailitem">
    <p class="hotelitem-img">
      <img class="hotelitem-hotelimg" :src="item.imageid" alt />
      <img
        class="hotelitem-warmimg"
        src="https://s.qunarzz.com/hotel_rn_source/images/warm-hotel-label6.png"
        alt
      />
    </p>
    <div class="hotel-detaillf">
      <p class="hotelitem-name">
        <span class="hotelitem-tit">{{item.name}}</span>
        <span class="hotelitem-class">{{item.dangciText}}</span>
      </p>
      <p class="hotelitem-situtation">
        <span class="hotelitem-score">{{item.score}}{{item.commentDesc}}</span>
        <span class="hotelitem-etag">"{{item.etag}}"</span>
        <span class="hotelitem-commentCountDesc">{{item.commentCountDesc}}</span>
      </p>
      <p class="hotelitem-locationInfo">{{item.locationInfo}}</p>
      <p class="hotelitem-activity">
        <span
          v-show="items.id===0"
          v-for="items in item.activity"
          :key="items.sort*Math.random()"
        >{{/[酒店榜]/.test(items.label) ? "": items.label}}</span>
      </p>
      <p class="hotelitem-cru">
        <span
          v-show="items.id===0"
          v-for="items in item.activity"
          :key="items.sort*Math.random()"
        >{{/[酒店榜]/.test(items.label) ?items.label : "" }}</span>
        <span class="hotelitem-price">
          ￥
          <span>{{item.price}}</span>
          起
        </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],

  created() {
  }
};
</script>

<style lang="scss" scoped>
img.hotelitem-hotelimg {
  width: 95px;
  height: 135px;
  border-radius: 5px;
}

img.hotelitem-warmimg {
  width: 95px;
  height: 20px;
}

.hotel-detailitem {
  display: flex;
  &:last-child{
      border-bottom: none;
      margin-bottom: 0;
  }
}

p.hotelitem-img {
  position: relative;
}

img.hotelitem-warmimg {
  position: absolute;
  left: 0;
  bottom: 0;
}
span.hotelitem-tit {
  font-size: 16px;
  font-family: PingFangSC-Regular, MicroSoft YaHei, "sans-serif";
  font-weight: 700;
  color: #000;
}

span.hotelitem-class {
  font-size: 12px;
  color: #666;
}
span.hotelitem-score {
  color: #2d96a4;
  font-size: 18px;
  font-family: PingFangSC-Regular, MicroSoft YaHei, "sans-serif";
}
span.hotelitem-etag {
  font-size: 12px;
  color: #333;
  margin: 0 9px;
}

span.hotelitem-commentCountDesc {
  font-size: 12px;
  color: #333;
}

p.hotelitem-locationInfo {
  font-size: 12px;
  color: #333;
}

p.hotelitem-activity span {
  color: rgba(45, 150, 164, 1);
  border-color: rgba(45, 150, 164, 0.5019607843137255);
  background-color: rgba(255, 255, 255, 1);
  border: 1px solid;
  margin-left: 3px;
}

p.hotelitem-activity {
  margin: 10px 0;
}

p.hotelitem-cru {
  color: rgba(226, 81, 80, 1);
  font-size: 12px;
}

p.hotelitem-price {
  font-size: 12px;
  color: #e25150;
}

p.hotelitem-price span {
  font-size: 22px;
}

p.hotelitem-img {
  margin-right: 8px;
}

.hotel-detailitem {
  margin: 10px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
}

p.hotelitem-situtation {
  margin: 5px 0;
}

span.hotelitem-price {
    font-size: 12px;
    float:right;
}

span.hotelitem-price span {
    font-size: 22px;
}

.hotel-detaillf {
    flex: 1;
}
</style>