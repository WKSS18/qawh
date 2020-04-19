<template>
  <div class="profile-succhead" v-show="true">
    <img
      class="profilesc-bg"
      src="https://s.qunarzz.com/usercenter_mobile/images/my/mybgnew-20161111.jpg"
      alt
    />
    <p class="profilesc-back">
      <i class="iconfont" @click="$router.push('/index')" style="color:white;font-size:25px">&#xe928;</i>
    </p>
    <a class="profilesc-userimg" @click="$router.push('/logout')">
      <img
        src="https://qcommons.qunar.com/headshot/headshotsById/191575798.png?l&ssl=true&_=1587304454697"
        alt
      />
    </a>
    <p class="profilesc-usrename">
        <span>
            {{username}}
        </span>
    </p>
  </div>
</template>

<script>
export default {
    data(){
        return {
            username:""
        }
    },
    created(){
        this.username = localStorage.username;
    }
}
</script>

<style lang="scss" scoped>
.profile-succhead {
  height: 160px;
  position: relative;
}
img.profilesc-bg {
  width: 100%;
  height: 640px;
  margin-top: -480px;
}
p.profilesc-back {
  position: absolute;
  top: 12px;
  left: 17px;
}
p.profilesc-back {
  position: absolute;
  top: 12px;
  left: 20px;
}

span.profilesc-userimg {
  position: absolute;
  top: 0px;
}

a.profilesc-userimg {
  display: block;
  position: absolute;
  right: 0;
  width: 65px;
  bottom: 0;
  margin: auto;
  border: 2px solid #00afc7;
  height: 65px;
  border-radius: 50%;
  top: 23%;
  left: -70%;
}

a.profilesc-userimg img {
  width: 65px;
  border-radius: 50%;
}
p.profilesc-usrename {
    position: absolute;
    top: 44%;
    font-size: 16px;
    left: 27%;
    color: #fff;
}
</style>