<template>
  <div class="ordernolog">
    <p>
      您还没有本地订单
      <br />快登录查看在线订单吧
    </p>
    <button>登录</button>
  </div>
</template>
<style lang="scss" scoped>
.ordernolog {
  position: relative;
}
.ordernolog p {
  position: absolute;
  top: 35%;
  left: 31%;
  font-size: 15px;
  text-align: center;
  line-height: 18px;
  color: #666;
}
.ordernolog {
  background: #f0f2f4
    url(//s.qunarzz.com/ordercenter_mobile/images/order_login.png) no-repeat
    center 100px;
  background-size: 70%;
  flex: 1;
  margin-top: 1px;
}

.ordernolog button {
    width: 90px;
    height: 40px;
    top: 43%;
    left: 38%;
    position: absolute;
    border: none;
    font-size: 16px;
    border-radius: 3px;
    background-color: #ff9800;
    color: #fff;
}
</style>