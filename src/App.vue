<template>
  <div class="app">
    <Layout />
    <van-tabbar placeholder v-model="active" active-color="red">
      <van-tabbar-item icon="wap-home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="coupon-o">分类</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o">购物车</van-tabbar-item>
      <van-tabbar-item icon="contact">个人中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import Layout from '@/views/Layout.vue'
export default {
  components:{Layout},
  data(){
    return {
      active:0
    }
  }
}
</script>

<style lang="less" scoped>

</style>