<template>
  <div class="ordersucccess">
    <div class="ordersuc-nav">
      <ul class="ordersucnav-list">
        <router-link tag="li" to="/order/orderall" active-class="orderstatus">全部</router-link>
        <router-link tag="li" to="/order/staygo" active-class="orderstatus">待出行</router-link>
        <router-link tag="li" to="/order/staypay" active-class="orderstatus">待支付</router-link>
        <router-link tag="li" to="/order/refund" active-class="orderstatus">退款单</router-link>
      </ul>
    </div>

    <div class="ordersuc-orderlist">
      <router-view></router-view>
      <p>没有查询到相关订单</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/style/mixin.scss";
.ordersucccess {
  @include border_1px(#ddd);
}
.ordersuc-nav {
  height: 43px;
  display: flex;
}
.ordersuc-orderlist {
  background: #f0f2f4
    url(//s.qunarzz.com/ordercenter_mobile/images/order_login.png) no-repeat
    center 100px;
  background-size: 70%;
  flex: 1;
  margin-top: 1px;
}
.orderstatus {
  color: #00bcd4;
  border-bottom: 2px solid #00bcd4 !important;
}

ul.ordersucnav-list {
  display: flex;
  width: 100%;

  align-items: center;
}
ul.ordersucnav-list li {
  flex: 1;
  font-size: 14px;
  text-align: center;
  border-bottom: 2px solid transparent;
}
ul.ordersucnav-list li {
  line-height: 43px;
}
.ordersucccess {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.ordersuc-orderlist {
  position: relative;
}

.ordersuc-orderlist p {
  position: absolute;
  top: 40%;
  left: 31%;
  font-size: 15px;
  color: #666;
}
</style>