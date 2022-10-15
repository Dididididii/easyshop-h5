<template>
    <div>
        <router-view />
        <van-tabbar  placeholder v-model="active" active-color="red">
            <van-tabbar-item to="/" replac icon="wap-home-o">首页</van-tabbar-item>
            <van-tabbar-item to="/category" replac icon="coupon-o">分类</van-tabbar-item>
            <van-tabbar-item to="/cart" replac icon="shopping-cart-o">购物车</van-tabbar-item>
            <van-tabbar-item to="contact" replac  icon="contact">个人中心</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default {
    name:'easy-Layout',
    data(){
    return {
      active:0
    }
  },
  methods:{
    ifActive(path){
        if(path === '/') {
            this.active = 0
        } else if(path === '/catelist') {
            this.active = 1
        } else if (path === '/cart') {
            this.active = 2
        } else if (path === '/contact') {
            this.active = 3
        }
    }
  },
  created() {
    // 判断路径选择底部标签位置
    this.ifActive(this.$route.path)
  }
}
</script>

<style lang="less" scoped>

</style>