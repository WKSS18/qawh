<template>
  <div class="login-container">
    <div class="login-header">
      <span class="login-back">
        <i class="iconfont" @click="$router.push('/profile')">&#xe928;</i>
      </span>
      <span class="login-tit">登录</span>
      <span class="login-reg">注册</span>
    </div>
    <div class="login-main">
      <div class="login-method">
        <ul class="login-methodlist">
          <router-link tag="li" to="/login/note" active-class="loginstyle">短信验证码登录</router-link>
          <router-link tag="li" to="/login/account" active-class="loginstyle">账号登录</router-link>
        </ul>
      </div>
      <router-view></router-view>
      <p class="login-explain">登录即同意去哪儿 用户服务协议 和 隐私政策</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login-container {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.login-header {
  height: 44px;
  display: flex;
  align-items: center;
}

.login-header {
  background: #18a9b9;
}

.login-header span {
  flex: 1;
}

span.login-back {
  color: #75ffff;
}

span.login-back i {
  font-size: 23px;
  margin-left: 10px;
}

span.login-tit {
  color: #fff;
  font-size: 18px;
  text-align: center;
}

span.login-reg {
  cursor: pointer;
  color: #75ffff;
  font-size: 16px;
  text-align: right;
  margin-right: 14px;
}

.login-method {
  height: 45px;
  display: flex;
  flex-direction: row;
  background: #19a9ba;
}

ul.login-methodlist {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

ul.login-methodlist li {
  text-align: center;
  line-height: 35px;
  width: 47%;
  height: 35px;
  border: 1px solid white;
  color: white;
  font-size: 16px;
  &:first-child {
    border-radius: 2px 0 0 2px;
  }
  &:last-child {
    border-radius: 0 2px 2px 0;
  }
}
.loginstyle {
  background: #fff;
  color: #25a4bb !important;
}
.login-main {
    flex: 1;
    background: #f3f9fc;
}
p.login-explain {
    color: #9e9e9e;
    text-align: center;
    margin-top: 20px;
    font-size: 13px;
}
</style>