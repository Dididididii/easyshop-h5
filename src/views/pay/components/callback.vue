<template>
  <div class="context">
    <van-nav-bar
        title="支付结果"
    />
    <!-- 支付成功 -->
    <div class="success">
        <van-empty :image="successed?success:error" :description="successed?'支付成功':'支付失败'">
            <van-button round type="danger" class="bottom-button" @click="$router.push('/')" >返回首页</van-button>
            <van-button round type="danger" class="bottom-button" @click="$router.push(`/vieworder?orderId=${$route.query.orderId}`)" v-if="successed">查看订单</van-button>
        </van-empty>
    </div>
  </div>
</template>

<script>
export default {
    name:'easy-PayCallback',
    data(){
        return {
            success:require('@/assets/imgs/success.png'),
            successed:false,
            error:require('@/assets/imgs/error.png'),
        }
    },
    created() {
        if(this.$route.query.payResult === 'true') {
            this.successed=true
        } else {
            this.successed=false
        }
    }
}
</script>

<style lang="less" scoped>

.bottom-button {
    width: 160px;
    height: 40px;
    margin-left: 10px;
}
</style>