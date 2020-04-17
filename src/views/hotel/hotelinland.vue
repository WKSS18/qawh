<template>
  <el-form :model="hotelmessage" status-icon label-width="100px" class="demo-ruleForm">
    <div class="hotel-cityname">
      <input
        type="text"
        :value="hotelmessage.city=$store.state.cityname"
        class="hcity-name"
        @focus="getcityname"
      />

      <span class="hcity-address">
        <i class="iconfont changecity">&#xe617;</i>
        <span>我的位置</span>
      </span>
    </div>
    <div class="hotel-datetime" @click="isDate = !isDate">
      <div class="hotel-datestart">
        <p>今天入住</p>
        <input type="text" readonly :value="hotelmessage.startday" />
      </div>

      <div class="hotel-dateend">
        <p>明天离店</p>
        <input type="text" readonly :value="hotelmessage.endday" />
      </div>
      <p class="hotel-days">共{{hotelmessage.days}}晚</p>
        <el-date-picker
          v-model="hotelmessage.datetime"
          class="date-block"
          type="dates"
          range-separator="至"
          format="yyyy 年 MM 月 dd 日"
          @change="getdays"
          value-format="yyyy-MM-dd"
        ></el-date-picker>
    </div>
    <div class="hotel-location">
      <input type="text" placeholder="搜索酒店名、地名、地标" v-model="hotelmessage.keywords" />
    </div>
    <button class="hotel-btn" @click="submitForm()">搜索</button>
  </el-form>
</template>

<script>
import "@/assets/style/font.scss";
import Pinyin from "pinyin";
export default {
  data() {
    return {
      hotelmessage: {
        checkInDate: "",
        checkOutDate: "",
        city: "",
        keywords: "",
        cityurl: "",
        datetime: "",
        days: "",
        startday: "",
        endday: ""
      },
      isDate: false,
    };
  },
  created() {
    if (sessionStorage) {
      sessionStorage.clear();
    }
  },
  methods: {
    submitForm() {
      var cityname = Pinyin(this.hotelmessage.city, {
        style: Pinyin.STYLE_NORMAL // 设置拼音风格
      }).join("");
      if (this.hotelmessage.city === "北京" || this.hotelmessage.city === "上海") {
        cityname += "_city";
      }
      if(this.hotelmessage.checkInDate==="" || this.hotelmessage.checkOutDate===""){
        alert('请选择日期');
        return;
      }
      this.hotelmessage.cityurl = cityname;
      this.$store.commit("SET_HOTELMSG", this.hotelmessage);
      sessionStorage.setItem("hotelmsg", JSON.stringify(this.hotelmessage));
      // sessionStorage.setItem("city", this.hotelmessage.city);
      // sessionStorage.setItem("checkInDate", this.hotelmessage.checkInDate);
      // sessionStorage.setItem("checkOutDate", this.hotelmessage.checkOutDate);
      // sessionStorage.setItem("cityurl", this.hotelmessage.cityurl);
      // sessionStorage.setItem("keywords", this.hotelmessage.keywords);
      this.$router.push("/hoteldetail");
    },
    //   选择城市
    getcityname() {
      this.$router.push("/city");
    },

    // 设置日期显示格式，计算天数
    getdays() {
      let datestart = 0;
      let dateend = 0;
      let dateformat = "";
      let endformat = "";
      this.hotelmessage.datetime[0].split("-").forEach((item, index) => {
        if (index !== 0) {
          if (index === 1) {
            dateformat += item + "月";
            datestart += Number(item) * 30;
          } else if (index === 2) {
            dateformat += item + "日";
            datestart += Number(item) * 1;
          }
        }
      });
      this.hotelmessage.datetime[1].split("-").forEach((item, index) => {
        if (index !== 0) {
          if (index === 1) {
            endformat += item + "月";
            dateend += Number(item) * 30;
          } else if (index === 2) {
            endformat += item + "日";
            dateend += Number(item) * 1;
          }
        }
      });
      this.hotelmessage.checkInDate = this.hotelmessage.datetime[0];
      this.hotelmessage.checkOutDate = this.hotelmessage.datetime[1];
      this.hotelmessage.days = dateend - datestart;
      this.hotelmessage.startday = dateformat;
      this.hotelmessage.endday = endformat;
    },

    // 选择酒店
    gethotelname() {
      this.$router.push("/hotelchoice");
    }
  }
};
</script>

<style lang="scss" scoped>
.hotel-cityname,
.hotel-datetime,
.hotel-location,
.hotel-btn {
  height: 55px;
  margin: 0 8px;
  display: flex;
  border-bottom: 1px solid #eee;
}
span.hcity-address {
  width: 80px;
}
.changecity {
  color: #607d8b;
  font-size: 12px;
}
span.hcity-name {
  flex: 1;
}
input.hcity-name {
  border: none;
  outline: none;
  flex: 1;
}

span.hcity-address {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.hotel-btn {
  height: 40px;
  border: none;
  outline: none;
  font-size: 16px;
  width: 95%;
  text-align: center;
  line-height: 40px;
  color: #fff;
  background: #ff714a;
  border-radius: 20px;
  padding-left: 43%;
  margin-top: 20px;
}

/deep/.el-input__inner {
  background: transparent;
  color: transparent;
  border: none;
}

/deep/.date-block {
  z-index: 100;
  position: absolute;
  width: 95%;
  height: 45px;
}
/deep/.el-input__prefix {
  display: none;
  height: 50px;
}

.hotel-datetime {
  input {
    border: none;
    background: white;
    height: 30px;
    font-size: 20px;
    width: 140px;
    font-family: PingFangSC-Regular, MicroSoft YaHei, "sans-serif";
  }
  p {
    color: #9e9e9e;
    font-size: 12px;
    padding-top: 10px;
  }
  .hotel-days {
    line-height: 85px;
    padding-top: 0;
  }
}


.hotel-cityname {
  input {
    border: none;
    font-size: 16px;
    color: #333;
    font-family: PingFangSC-Regular, MicroSoft YaHei, "sans-serif";
  }
}

.hotel-location {
  input {
    color: #bdbdbd;
    font-size: 16px;
    width: 95%;
    outline: none;
    border: none;
    font-family: PingFangSC-Regular, MicroSoft YaHei, "sans-serif";
  }
}
.date-block {
    width: 100%!important;
    position: absolute!important;
    height: 45px!important;
}

span.el-input__prefix {
    display: none;
}

input.el-input__inner {
    background: transparent;
}

</style>