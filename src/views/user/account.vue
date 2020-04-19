<template>
  <div class="loginact-container">
    <form class="loginact-form">
      <div class="loginact-account">
        <span>账号</span>
        <input v-model="username" type="text" name="username" placeholder="手机号/邮箱/用户名" />
      </div>
      <div class="loginact-pwd">
        <span>密码</span>
        <input v-model="password" type="password" name="password" placeholder="请输入密码" />
      </div>
      <div class="loginact-btn">
        <input type="button" @click="loginsub" value="登录" />
      </div>
    </form>
    <p class="loginact-seaps">找回密码</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    async loginsub() {
      if (
        this.username.trim().length === 0 ||
        this.password.trim().length === 0
      ) {
        alert("用户名或密码不能为空");
        return;
      }
      let loginms = await this.$http.post("/api/login", {
        username: this.username,
        password: this.password
      });
      this.username = "";
      this.password = "";
      console.log(loginms);
      if (loginms.data.code === -1) {
        alert(loginms.data.message);
      } else if (loginms.data.code === -2) {
        alert(loginms.data.message);
      } else {
        alert(loginms.data.message);
        localStorage.setItem(
          "username",
          JSON.parse(loginms.config.data).username
        );
        localStorage.setItem(
          "showprofile",
          JSON.stringify({
            showlogout: false,
            showloginsuc: true
          })
        );
        localStorage.setItem('showorder',JSON.stringify({
          showordersucess:true,
          showordernologin:false
        }))

        this.$router.push("/profile");
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/style/mixin.scss";
.loginact-account span {
  font-size: 18px;
  color: #19a9ba;
}

.loginact-pwd span {
  font-size: 16px;
  color: #19a9ba;
}

.loginact-account input {
  width: 75%;
  line-height: 46px;
  font-size: 18px;
  padding-left: 50px;
  outline: none;
  border: none;
}

.loginact-pwd span {
  font-size: 18px;
  color: #19a9ba;
}

.loginact-pwd input {
  font-size: 18px;
  width: 75%;
  line-height: 46px;
  border: none;
  padding-left: 50px;
  outline: none;
}
p.loginact-seaps {
  color: #00afc7;
  margin-top: 12px;
  margin-left: 85%;
}

form.loginact-form {
  // background: white;
  border-top: 1px solid #ccc;
}

.loginact-account {
  padding-left: 10px;
  background: white;
  outline: none;
}

.loginact-pwd {
  @include border_1px(#ccc);
  background: white;
  padding-left: 10px;
  border-bottom: 1px solid #ccc;
  outline: none;
}

form.loginact-form {
  margin-top: 10px;
}
.loginact-btn input {
  width: 96%;
  height: 50px;
  background: #85d1db;
  border-radius: 5px;
  font-size: 18px;
  border: none;
  color: white;
  outline: none;
}

.loginact-btn {
  display: flex;
  justify-content: center;
  margin-top: 15px;
}
</style>