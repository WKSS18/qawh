<template>
  <div class="profile-container">
    <div class="profile-header" v-show="showlogout">
      <img
        class="profile-bg"
        src="https://s.qunarzz.com/usercenter_mobile/images/my/mybgnew-20161111.jpg"
        alt
      />
      <p class="profile-back">
        <i
          class="iconfont"
          @click="$router.push('/index')"
          style="color:white;font-size:25px"
        >&#xe928;</i>
      </p>
      <a class="profile-userimg">
        <img src="https://source.qunarzz.com/usercenter/touch/avatar.png" alt />
      </a>
      <p class="profile-logreg">
        <span @click="$router.push('/login')">登录</span>
        /
        <span @click="$router.push('/register')">注册</span>
      </p>
    </div>
    <SuccessProfile v-show="showloginsuc"></SuccessProfile>
  </div>
</template>

<script>
import SuccessProfile from "./successprofile";
export default {
  data() {
    return {
      showlogout: true,
      showloginsuc: false
    };
  },
  created() {
    this.showlogout = localStorage.length === 0? this.showlogout: JSON.parse(localStorage.showprofile).showlogout;
    this.showloginsuc =localStorage.length === 0? this.showloginsuc : JSON.parse(localStorage.showprofile).showloginsuc;
  },
  components: {
    SuccessProfile
  }
};
</script>

<style lang="scss" scoped>
.profile-header {
  height: 160px;
  position: relative;
}
img.profile-bg {
  width: 100%;
  height: 640px;
  margin-top: -480px;
}
p.profile-back {
  position: absolute;
  top: 12px;
  left: 17px;
}
p.profile-back {
  position: absolute;
  top: 12px;
  left: 20px;
}

span.profile-userimg {
  position: absolute;
  top: 0px;
}

a.profile-userimg {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 65px;
  bottom: 0;
  margin: auto;
  border: 2px solid #00afc7;
  height: 65px;
  border-radius: 50%;
}

a.profile-userimg img {
  width: 65px;
}
p.profile-logreg {
  position: absolute;
  top: 56%;
  left: 40%;
  right: 0;
  bottom: 0;
  margin: auto;
  color: #fff;
  font-size: 14px;
  height: 22px;
}
</style>