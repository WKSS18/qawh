<template>
  <div class="child-container">
    <ul class="child-list">
      <li class="child-item" v-for="item in travelChild.parenthoodlist" :key="item.id">
        <img :src="item.img" alt />
        <p>{{item.title}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { getTravelData } from "@/api/index.js";
export default {
  data() {
    return {
      travelChild: {
        parenthoodlist: []
      }
    };
  },
  async created() {
    let rs = await getTravelData();
    this.travelChild.parenthoodlist = rs.data.strategylist;
  }
};
</script>

<style lang="scss" scoped>
.child-container {
  .child-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .child-item {
      width: 49%;
      margin-top: 15px;
      img {
        width: 173px;
        height: 107px;
        border-radius: 5px;
      }
      p {
        font-size: 14px;
        color: #000;
        margin-top: 5px;
        line-height: 20px;
      }
    }
  }
}
</style>