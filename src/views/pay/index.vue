<template>
  <div class="context">
    <van-nav-bar
        :title="`剩${time}自动关闭订单`"
        left-arrow
        @click-left="$router.push('/')"
    />
    <div class="box">
        <van-address-list
            v-model="chosenAddressId"
            :list="list"
        />
        <div class="goodsCard" v-for="item in orderList.skus" :key="item.id">
            <van-card
                :num="item.quantity"
                :price="item.realPay"
                :desc="item.attrsText"
                :title="item.name"
                :thumb="item.image"
            />
        </div>
        <van-cell-group class="pirce">
            <van-cell title="总价格" :value="orderList.totalMoney" />
        </van-cell-group>
    </div>
    <footer>
        <div class="footerBox">
            <div @click="delOrder">取消订单</div>
            <div>找朋友代付</div>
            <div @click="payOrder">付款</div>
        </div>
    </footer>
  </div>
</template>

<script>
import {getOrder , detalOrder } from '@/api/pay'
export default {
    name:'easy-Pay',
    data(){
        return {
            orderList:{},
            time:'',
            timer:null,
            chosenAddressId: '1',
            list:[]
        }
    },
    methods:{
        payOrder() {
            // 支付地址
            // const payUrl = '后台服务基准地址+支付页面地址+订单ID+回跳地址'
            const baseURL = 'https://apipc-xiaotuxian-front.itheima.net/'
            const redirect = encodeURIComponent('http://localhost:8080/pay/callback')
            const payUrl = `${baseURL}pay/aliPay?orderId=${this.$route.query.orderId}&redirect=${redirect}`
            // this.$router.push(payUrl)
            window.open(payUrl, "_blank");

        },
        async delOrder() {
            await detalOrder(this.$route.query.orderId,'不想要了')
            this.$toast('订单取消成功')
            this.$router.push('/')
        },
        async getOderList() {
            const res = await getOrder(this.$route.query.orderId)
            this.orderList = res.result
            console.log(this.orderList);
            this.list.push({
                id: '1',
                name: res.result.receiverContact,
                tel: res.result.receiverMobile,
                address: res.result.provinceCode + res.result.cityCode+res.result.countyCode+res.result.receiverAddress,
                isDefault: true,
            },)
        },
        countDown(inputTime) {
            //获取从1970年1月1日到现在的时间的毫秒数
            var nowTime = +new Date(); 
            //获取输入时间的毫秒数
            var putTime = +new Date(inputTime); 
            //剩余时间总的毫秒数 除以 1000 变为总秒数
            var dec = (putTime-nowTime )/ 1000;
            // //得到天 格式化成前缀加零的样式
            // var d =  parseInt(dec/60/60/24);
            // d = d<10 ? '0'+ d : d;
            //得到小时 格式化成前缀加零的样式
            // var h = parseInt(dec/60/60%24);
            // h = h<10 ? '0'+ h : h;     
            //得到分钟 格式化成前缀加零的样式
            var m= parseInt(dec/60%60);
            m = m<10 ? '0'+ m: m;
            //得到秒 格式化成前缀加零的样式
            var s= parseInt(dec%60);
            s = s<10 ? '0'+ s : s;
            return `${m}分${s}秒`;
        }

    },
    async created() {
        await this.getOderList()
        this.timer = setInterval(() => {
            let starttime = Date.parse(new Date(this.orderList.payLatestTime));
            this.time = this.countDown(starttime);
            if(Date.parse(new Date()) > starttime) {
                clearInterval(this.timer)
                this.$toast('订单未完成支付，订单关闭')
                this.$router.push('/')
            }
        }, 1000)
    }
}
</script>

<style lang="less" scoped>
.box{
    margin-bottom: 100px;
}
.pirce{
    position: fixed;
    bottom: 50px;
    left: 0;
    width: 100%;
}
.footerBox{
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    z-index: 999;
    div {
        margin: 0 5px;
        width: 82px;
        height: 23px;
        text-align: center;
        font-size: 14px;
        border: 1px solid #888;
        background-color: #fff;
        border-radius: 10px;
    }
}
.van-cell__value{
    color: #000;
    font-size: 18px;
}
.van-address-list{
    padding:12px;
}
.van-address-list__bottom {
    display: none;
}
</style>