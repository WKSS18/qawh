<template>
    <div class="order-container">
        <div class="order-head">
            <span class="order-back">
                <i class="iconfont" @click="$router.push('/index')">&#xe928;</i>
            </span>
            <span class="order-mine">我的订单<i class="iconfont">&#xe670;</i></span>
            <span class="order-search">订单查询</span>
        </div>
        <OrderSuccess v-show='showordersucess'></OrderSuccess>
        <OrdernoLogin v-show="showordernologin"></OrdernoLogin>
    </div>
</template>
<script>
import OrderSuccess from './ordersuccess'
import OrdernoLogin from './ordernologin'
export default {
    data(){
        return {
            showordersucess:false,
            showordernologin:true
        }
    },
    components:{
        OrderSuccess,
        OrdernoLogin
    },
    created(){
        console.log(localStorage,localStorage.length)
        this.showordersucess = localStorage.showorder === undefined? this.showordersucess: JSON.parse(localStorage.showorder).showordersucess;
        this.showordernologin =localStorage.showorder === undefined? this.showordernologin : JSON.parse(localStorage.showorder).showordernologin;
    }
}
</script>

<style lang="scss" socped>
.order-container {
    display: flex;
    flex-direction: column;
    height: 100%;
}
    .order-head {
    height: 44px;
    display: flex;
    align-items: center;
}
.order-head {
    height: 44px;
    display: flex;
    align-items: center;
}
.order-head span {
    flex: 1;
}
span.order-back i {
    font-size: 25px;
    margin-left: 20px;
}
span.order-search {
    text-align: right;
    font-size: 15px;
    color: #00bcd4;
    margin-right: 16px;
}
span.order-mine {
    text-align: center;
    font-size: 18px;
    color: #333;
}
span.order-mine i {
    color: #bbb;
}
</style>