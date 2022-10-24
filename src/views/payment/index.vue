<template>
  <div class="context">
    <van-nav-bar
        title="待付款"
        left-arrow
        @click-left="$router.go(-1)"
    />
    <div class="goodsBox">
        <div class="goodsList" v-for="item in orderList" :key="item.id">
            <div class="title">
                {{`订单编号:${item.id}`}}
            </div>
            <van-card
                v-for="goods in item.skus"
                :key="goods.id"
                :num="goods.quantity"
                :price="goods.curPrice"
                :desc="goods.attrsText"
                :title="goods.name"
                :thumb="goods.image"
            />
            <div class="btn">
                <div @click="delteOrder(item.id)">取消订单</div>
                <div>朋友代付</div>
                <div @click="$router.push(`/pay?orderId=${item.id}`)">付款</div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import {getMyOrder,detalOrder} from '@/api/pay'
export default {
    name:'easy-Payment',
    data() {
        return {
            config:{
                page:1,
                pageSize:10,
                orderState:0
            },
            orderList:[]
        }
    },
    methods:{
        async getMyOrders () {
            const {result} = await getMyOrder(this.config)
            result.items.forEach(item => {
                if(item.orderState === 1 && item.countdown>-1) {
                    this.orderList.push(item)
                }
            })
            console.log(this.orderList);
            
        },
        async delteOrder (id) {
            await detalOrder(id)
            this.$toast('订单取消成功')
            this.getMyOrders()
        },
    },
    created() {
        this.getMyOrders()
    }
}
</script>

<style lang="less" scoped>
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
.btn{
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    justify-content: space-around;
    background-color: #fff;
    width: 100%;
    height: 40px;
    div{
        background-color: red;
        color:#fff;
        font-size: 13px;
        width: 80px;
        height: 22px;
        line-height: 23px;
        text-align: center;
        border: 1px solid #000;
        border-radius: 10px;
    }
}
</style>