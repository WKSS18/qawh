<template>
  <div class="orderall">
    <ul class="orderall-lis">
      <li class="orderall-item" v-for="item in orderall.orderalllist" :key="item.sysCode">
        <p class="orderitem-head">
          <span class="orderitem-name">
            <i
              class="iconfont"
              ref="lis"
              :title="item.businessType"
              style="color:#fff;background:#bfbfbf"
            ></i>
            {{orderall.orderclassify[item.businessType]}}
          </span>
          <span class="orderitem-status">{{item.statusDesc}}</span>
        </p>
        <div class="orderitem-con">
          <div class="orderitem-conlf">
            <p class="orderitem-title">{{item.name}}</p>

            <p
              class="orderitem-time"
              v-show="item.businessType ==='hotel'? true : false"
            >{{item.fromDate}}至{{item.toDate}}</p>
            <p
              class="orderitem-time"
              v-show="item.businessType ==='flight'? true : false"
            >{{item.arrival}}</p>
            <p
              class="orderitem-time"
              v-show="item.businessType ==='train'? true : false"
            >{{item.arrival}}</p>

            <p
              class="orderitem-detail"
              v-show="item.businessType ==='train'? true : false"
            >车次 {{item.trainNo}}</p>
            <p
              class="orderitem-detail"
              v-show="item.businessType ==='flight'? true : false"
            >{{item.originFlight}}</p>
            <p
              class="orderitem-detail"
              v-show="item.businessType ==='hotel'? true : false"
            >{{item.roomCount}}间 {{item.roomType}}</p>
          </div>
          <div class="orderitem-price">￥{{item.price}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { getAllOrderData } from "@/api/order";
export default {
  data() {
    return {
      orderall: {
        orderalllist: [],
        orderclassify: {
          train: "火车",
          flight: "飞机",
          hotel: "酒店"
        }
      }
    };
  },
  computed: {},
  async created() {
    let orderrs = await getAllOrderData();
    this.orderall.orderalllist = orderrs.data.data.orderList;
    console.log(this.orderall.orderalllist);
    this.$nextTick(() => {
      for (var i = 0; i < this.$refs.lis.length; i++) {
        let title = this.$refs.lis[i].title;
        switch (title) {
          case "hotel":
            this.$refs.lis[i].innerHTML = "&#xe60e;";
            break;
          case "train":
            this.$refs.lis[i].innerHTML = "&#xe610;";
            break;
          case "flight":
            this.$refs.lis[i].innerHTML = "&#xe66b;";
            break;
        }
      }
    });
  }
};
</script>

<style lang="scss" scoped>
p.orderitem-head {
  height: 46px;
  display: flex;
  align-items: center;
}

span.orderitem-status {
  text-align: rigth;
  flex: 1;
  text-align: right;
  color: #888;
  margin-right: 20px;
}

p.orderitem-head span i {
  margin: 0 9px;
  border-radius: 2px;
  vertical-align: middle;
}

p.orderitem-head .orderitem-name {
  color: #888;
  font-size: 16px;
}
.orderitem-con {
  height: 74px;
  display: flex;
  padding: 10px;
}

li.orderall-item {
  margin-top: 10px;
  background: white;
}

p.orderitem-title {
  font-size: 16px;
  color: #888;
}

p.orderitem-time {
  font-size: 12px;
  color: #888;
}

p.orderitem-detail {
  color: #888;
  font-size: 12px;
}

p.orderitem-time {
  margin: 10px 0;
}
.orderitem-price {
    flex: 1;
    text-align: right;
    font-size: 16px;
    color: #888;
    margin-right: 12px;
}
</style>