<template>
    <div class="citymore-container">
        <div class="citymore-head">
            <i class="iconfont citymore-back" @click="$router.push('/strategy')" style="font-size:25px">&#xe928;</i>
            <span class="citymore-des">目的地城市</span>
            <span class="citymore-index" @click='$router.push("/index")'>
                <i></i>
                首页
            </span>
        </div>

        <div class="citymore-tab">
            <ul class="citymore-tabs">
                <router-link tag='li' active-class="citymoreactive" to='/strategy/citymore/inland'>国内</router-link>
                <router-link tag='li' active-class="citymoreactive" to="/strategy/citymore/boardcity">国外</router-link>
            </ul>
        </div>
        <router-view></router-view>
    </div>
</template>

<style lang="scss" scoped>
    .citymore-container {
    height: 100%;
    display: flex;
    flex-direction: column;
}
.citymore-head {
    height: 45px;
    color: white;
    display: flex;
    background: #25a4bb;
    align-items: center;
}
i.iconfont.citymore-back {
    margin-left: 10px;
}

span.citymore-des {
    flex: 1;
    text-align: right;
    font-size: 16px;
    margin-left: 30px;
}

span.citymore-index {
    flex: 1;
    margin-right: 20px;
    text-align: right;
    font-size: 12px;
}
ul.citymore-tabs {
    height: 40px;
    display: flex;
    align-items: center;
}

ul.citymore-tabs li {
    flex: 1;
    text-align: center;
    font-size: 15px;
    line-height: 40px;
    border-bottom: 4px solid transparent;
    color: #1ba9ba;
    &:first-child{
        border-right: 1px solid #25a4bb;
    }
}

.citymore-tab {
    background: #ebebeb;
}
.citymoreactive{
    border-bottom: 4px solid #25a4bb!important;
}
</style>