<template>
  <div class="context">
    <van-nav-bar
        title="查看订单"
        left-arrow
        @click-left="$router.go(-1)"
    />
    <van-steps :active="active">
        <van-step>付款</van-step>
        <van-step>卖家发货</van-step>
        <van-step>买家收货</van-step>
        <van-step>交易完成</van-step>
    </van-steps>
    <div class="goodsList">
        <div class="title">
            {{`订单编号：${orderList.id}`}}&nbsp;
        </div>
        <van-card
            v-for="goods in orderList.skus"
            :key="goods.id"
            :num="goods.quantity"
            :price="goods.curPrice"
            :desc="goods.attrsText"
            :title="goods.name"
            :thumb="goods.image"
        />
        <div class="Introduction">
            <div class="user">
                <p>收货人：</p>
                <p>{{orderList.receiverContact}}</p>
            </div>
            <div class="address">
                <p>收货地址：</p>
                <p>{{orderList.cityCode+orderList.provinceCode+orderList.countyCode+orderList.receiverAddress}}</p>
            </div>
            <div class="photoNumber">
                <p>电话：</p>
                <p>{{orderList.receiverMobile}}</p>
            </div>
            <div class="price">
                <p>实付款：</p>
                <p class="priceNum">￥{{orderList.payMoney}}</p>
            </div>
        </div>
    </div>
    <div class="footerbtn">
        <div>退货</div>
        <div v-if="orderList.orderState === 2">提醒卖家发货</div>
        <div v-if="orderList.orderState === 3" @click="checkLogistics">查看物流</div>
        <div v-if="orderList.orderState === 3" @click="postReceipt">确认收货</div>
        <div v-if="orderList.orderState === 4" >待评价</div>
    </div>
    <van-popup v-model="show" round closeable position="bottom" :style="{ height: '80%', width: '100%' }">
        <div class="logisticsBox" v-if="logisticsList.company">
            <div class="Introduction">
                <div class="photoNumber">
                    <p>电话：</p>
                    <p>{{logisticsList.company.tel}}</p>
                </div>
                <div class="company">
                    <p>物流公司：</p>
                    <p>{{logisticsList.company.name}}</p>
                </div>
                <div class="orderNum">
                    <p>快递单号：</p>
                    <p>{{logisticsList.company.number}}</p>
                </div>
            </div>
            <van-steps direction="vertical" :active="0">
                <van-step v-for="item in logisticsList.list" :key="item.id">
                    <h3>{{item.text}}</h3>
                    <p>{{item.time}}</p>
                </van-step>
            </van-steps>
        </div>
    </van-popup>
  </div>
</template>

<script>
import { getOrder,getLogistics,putReceipt } from '@/api/pay';
export default {
    name:'easy-ViewOrder',
    data() {
        return {
            show:false,
            active:1,
            orderList:{},
            logisticsList:{}
        }
    },
    methods:{
        async checkLogistics() {
            const res = await getLogistics(this.$route.query.orderId)
            this.logisticsList = res.result
            this.show=true
        },
        async getOrders() {
            const res = await getOrder(this.$route.query.orderId)
            this.orderList = res.result
            this.active = res.result.orderState - 1
        },
        async postReceipt() {
            await putReceipt(this.$route.query.orderId)
            this.$toast('确认收货成功')
            this.getOrders()
        }
    },
    created() {
        this.getOrders()
    }
}
</script>

<style lang="less" scoped>
.logisticsBox{
    margin-top: 50px;
}
.Introduction{
    margin: 0 5px;
    background-color: #fff;
    .user,.address,.photoNumber,.price,.company,.orderNum{
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: space-between;
    }
    .priceNum{
        color:red;
        font-size: 18px;
    }
}

p{
    margin:0;
    font-size: 15px;
}
.title{
    font-size: 13px;
    text-align: right;
    background-color: #fff;
    width: 100%;
    margin-right: 10px;
}
.van-card{
    margin: 0;
}
.footerbtn{
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    justify-content: flex-end;
    background-color: #fff;
    width: 100%;
    height: 40px;
    div{
        background-color: red;
        color:#fff;
        margin-right: 10px;
        font-size: 13px;
        width: 85px;
        height: 22px;
        line-height: 23px;
        text-align: center;
        border: 1px solid #000;
        border-radius: 10px;
    }
}
</style>