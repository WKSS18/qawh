<template>
  <div class="tphoto-container">
    <ul class="tphoto-list">
      <li class="tphoto-item" v-for="item in travelPhoto.shootlist" :key="item.id">
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
      travelPhoto: {
        shootlist: []
      }
    };
  },
  async created() {
    let rs = await getTravelData();
    this.travelPhoto.shootlist = rs.data.shootlist;
  }
};
</script>

<style lang="scss" scoped>
.tphoto-container {
  .tphoto-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .tphoto-item {
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