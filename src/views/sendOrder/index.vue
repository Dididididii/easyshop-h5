<template>
  <div class="context">
    <van-nav-bar
        title="待发货"
        left-arrow
        @click-left="$router.go(-1)"
    />
    <div class="goodsBox">
        <div class="goodsList" v-for="item in orderList" :key="item.id">
            <div class="title">
                {{`订单编号：${item.id}`}}&nbsp;
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
                <div>退货</div>
                <div @click="toOrder(item.id)" >查看订单</div>
                <div >提醒卖家发货</div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import {getMyOrder} from '@/api/pay'
export default {
    name:'easy-SendOrder',
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
        toOrder(id) {
            this.$router.push(`/vieworder?orderId=${id}`)
        },
        async getMyOrders () {
            const {result} = await getMyOrder(this.config)
            result.items.forEach(item => {
                if(item.orderState === 2) {
                    this.orderList.push(item)
                }
            })
        }
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