<template>
  <div class="main">
    <div class="qn-touchhead">
      <ul class="qn-touchlis">
        <li class="qn-touchitem" v-for="item in touchlist.datalist" :key="item.id" @click='routego(item.id)'>
          <img :src="item.img" alt />
          <span>{{item.title}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
import { getIndexData } from "@/api/index.js";
import "@/assets/style/common.scss";
export default {
  data() {
    return {
      touchlist: {
        datalist: []
      }
    };
  },

  async created() {
    let rs = await getIndexData();
    this.touchlist.datalist = rs.data.datalist;
  },
  methods:{
      routego(id){
          console.log(id);
          switch(id){
              case "00123":
                  this.$router.push('/hotel');
                  break;
          }
      }
  }
};
</script>

<style lang="scss" socped>
.main {
  display: flex;
  flex-direction: column;
  .qn-touchhead {
    padding-top: 15px;
    height: 290px;
    .qn-touchlis {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      .qn-touchitem {
        display: flex;
        width: 20%;
        flex-direction: column;
        align-items: center;
        text-align: center;
        margin: 7px 0;
        img {
          width: 28px;
          height: 28px;
        }
        &:nth-child(1) {
          img {
            width: 51px;
            height: 51px;
          }
        }
        &:nth-child(2) {
          img {
            width: 51px;
            height: 51px;
          }
        }
        &:nth-child(3) {
          img {
            width: 51px;
            height: 51px;
          }
        }
        &:nth-child(4) {
          img {
            width: 51px;
            height: 51px;
          }
        }
        &:nth-child(5) {
          img {
            width: 51px;
            height: 51px;
          }
        }
        span {
          font-size: 12px;
          color: #333;
          margin-top: 7px;
        }
      }
    }
  }
}
</style>