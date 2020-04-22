<template>
  <div class="hotelmap-container">
    <div id="map"></div>
  </div>
</template>

<script>

export default {
  methods: {
    //创建地图实例
    createMap() {
      // 创建Map实例
      var map = new BMap.Map("map");
      var geolocation = new BMap.Geolocation();
      //调用百度地图api 中的获取当前位置接口
      geolocation.getCurrentPosition(function(r) {
        if (this.getStatus() == BMAP_STATUS_SUCCESS) {
          //获取当前位置经纬度
          let myGeo = new BMap.Geocoder();
          myGeo.getLocation(new BMap.Point(r.point.lng, r.point.lat), function(
            result
          ) {
            if (result) {
              console.log(result);
              // 初始化地图,设置中心点坐标和地图级别
              map.centerAndZoom(
                new BMap.Point(result.point.lng, result.point.lat),
                11
              ); //设置中心点
              map.setCurrentCity("北京"); //由于有3D图，需要设置城市哦
              //开启鼠标滚轮缩放,默认关闭
              map.enableScrollWheelZoom(false);
              //添加缩略图控件
              map.addControl(
                new BMap.OverviewMapControl({
                  isOpen: false,
                  anchor: BMAP_ANCHOR_BOTTOM_RIGHT
                })
              );
              //添加缩放平移控件
              map.addControl(new BMap.NavigationControl());
              //添加比例尺控件
              map.addControl(new BMap.ScaleControl());
              //添加地图类型控件
              map.addControl(new BMap.MapTypeControl());
              var marker = new BMap.Marker(
                new BMap.Point(result.point.lng, result.point.lat)
              );
              //把标注添加到地图上
              map.addOverlay(marker);
            }
          });
        }
      });
    }
  },
  mounted() {
    this.createMap();
  }
};
</script>
<style lang="scss" scoped>
.hotelmap-container {
  position: absolute;
  top: 13%;
  width: 100%;
  z-index: 10;
  height: 87%;
  background: #ccc;
  overflow: hidden;
}
#map {
  height: 100%;
}
</style>