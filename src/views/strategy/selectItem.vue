<template>
  <div class="straselect-container">
    <ul class="strselect-list">
      <li
        class="strselect-liitem"
        v-for="item in selectcon.selectlist"
        :key="Number(item.createTime)-Math.random()"
      >
        <p class="straselect-title">{{item.title}}</p>
        <p class="straselect-username">{{item.userName}}</p>
        <div class="straselect-swapper" :ref="item.id" :id="item.id">
          <div :style="'width:'+item.images.length*120+'px'">
            <ul ref="ulwidth" :style="'width:'+item.images.length*120+'px'">
              <li v-for="value in item.images" :key="value.slice(5,)">
                <img :src="value" alt />
              </li>
            </ul>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { getSelectData } from "@/api/stargety";
import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";
import { Indicator, Toast } from "mint-ui";
import "mint-ui/lib/style.css";
BScroll.use(Pullup);
export default {
  data() {
    return {
      selectulwidth: 0,
      nums: [],
      imageendlist: [],
      imagetartlist: [],
      limore: 0,
      selectcon: {
        selectlist: [],
        limit: 10,
        offset: 0,
        selectlistlen: 0
      }
    };
  },
  created() {
    this.initSelectData();
    this.$nextTick(() => {
      this.initBscroll();
    });
  },
  methods: {
    initBscroll() {
      this.bscroll = new BScroll(this.$root.$el, {
        scrollY: true,
        pullUpLoad: true,
        click:true
      });
      //  this.rowscroll = new BScroll(document.querySelector('.straselect-swapper'), {
      //   scrollX: true,
      //   probeType: 3
      // });

      this.bscroll.on("pullingUp", () => this.initSelectData());
    },

    async initSelectData() {
      Indicator.open();
      let selectrs = await getSelectData({
        limit: this.selectcon.limit,
        offset: this.selectcon.offset
      });

      this.selectcon.selectlist.push(...selectrs.data.data.list);
      this.selectcon.selectlistlen = selectrs.data.data.list.length;
      this.$nextTick(() => {
        //   多个不同的区块同时实现横向滑动效果
        for (var i = 0; i < this.selectcon.selectlist.length; i++) {
          this.rowscroll = new BScroll(
            this.$refs[this.selectcon.selectlist[i].id][0],
            {
              scrollX: true,
              probeType: 3
            }
          );
        }

        Indicator.close();
        this.bscroll.finishPullUp();
        this.bscroll.refresh();
        if (this.selectcon.selectlistlen === 0) {
          Toast({
            message: "没有更多的数据了",
            position: "bottom",
            duration: 2000
          });
          return;
        }
        this.selectcon.offset = Math.floor(Math.random() * 1000000000);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
p.straselect-title {
  max-height: 42px;
  font-size: 17px;
  color: #333;
  letter-spacing: 0;
  line-height: 21px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

p.straselect-username {
  font-size: 14px;
  color: #999;
  letter-spacing: 0;
  margin: 12px 0;
}
.straselect-swapper ul li img {
  width: 112px;
  height: 94px;
  border-radius: 2px;
  margin-right: 8px;
}

.straselect-swapper div ul {
  display: flex;
  flex-wrap: nowrap;
}
li.strselect-liitem {
  border-bottom: 1px solid #eaeaea;
  padding-bottom: 16px;
  padding-left: 15px;
}
li.strselect-liitem {
  padding-right: 8px;
}
li.strselect-liitem {
  padding-top: 12px;
}
</style>