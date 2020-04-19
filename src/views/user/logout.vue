<template>
  <div class="logout">
    <div class="logout-head">
      <span class="logout-back">
        <i class="iconfont" @click="$router.push('/profile')">&#xe928;</i>
      </span>
      <span class="logout-setup">设置</span>
    </div>
    <div class="logout-main">
      <div class="logout-usermsg">
        <img src='https://qcommons.qunar.com/headshot/headshotsById/191575798.png?l&ssl=true&_=1587304454697' alt />
        <span>{{username}}</span>
      </div>
      <button class="logout-btn" @click='logout'>退出登录</button>
    </div>
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
    },
    methods:{
        async logout(){
            let logoutrs = await this.$http.get('/api/logout');
            console.log(logoutrs);
            if(logoutrs.data.code===1){
                alert(logoutrs.data.message);
                localStorage.removeItem("showprofile");
                localStorage.removeItem("username");
                localStorage.removeItem('showorder');
                this.$router.push('/profile');
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.logout-head {
  height: 44px;
  display: flex;
  align-items: center;
}
span.logout-back {
  margin-left: 18px;
}
span.logout-back i {
  font-size: 24px;
}
span.logout-setup {
  flex: 1;
  text-align: center;
  margin-right: 35px;
  font-size: 18px;
}
.logout {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.logout-main {
    flex: 1;
    background: #ebeced;
}

.logout-usermsg {
    height: 85px;
    background: white;
    margin-top: 15px;
    margin-bottom: 10px;
}
.logout-btn {
    width: 94%;
    margin-left: 3%;
    height: 44px;
    border: none;
    background: white;
    border: 1px solid #1ba9ba;
    color: #1ba9ba;
    border-radius: 5px;
    font-size: 18px;
    font-size: 18x;
}
.logout-usermsg img {
    width: 61px;
    border-radius: 50%;
    margin-left: 4%;
    margin-top: 3%;
}

.logout-usermsg span {
    margin-left: 25%;
    display: block;
    font-size: 20px;
    margin-top: -12%;
}
</style>