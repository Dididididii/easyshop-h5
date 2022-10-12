<template>
  <div class="cartContext">
    <van-nav-bar
      title="购物车"
      placeholder 
      fixed
    />
    <!-- 正常的购物车 -->
    <div class="goodsList">
      <van-swipe-cell v-for="i in 6" :key="i">
        <van-card
          :key="i"
          num="2"
          price="2.00"
          desc="描述信息"
          title="商品标题"
          class="goods-card"
        >
        <template #thumb >
          <div style="display:flex;">
            <van-checkbox v-model="goodsChecked"></van-checkbox>
            <van-image
              style="margin-left: 10px;"
              width="5.5rem"
              height="5.5rem"
              fit="cover"
              src="https://img01.yzcdn.cn/vant/cat.jpeg"
            />
          </div>
        </template>
      </van-card>
        <template #right>
          <van-button square text="删除" type="danger" class="delete-button" />
        </template>
      </van-swipe-cell>
    </div>
    <!-- 未登录的购物车 -->
    <div class="notLogin"></div>
    <!-- 登录后购物车无商品 -->
    <div class="notGoodsList"></div>
    <footer>
      <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit">
        <van-checkbox v-model="checked">全选</van-checkbox>
      </van-submit-bar>
    </footer>
  </div>
</template>

<script>
export default {
    name:'easy-cart',
    data(){
      return {
        checked:false,
        goodsChecked:false
      }
    }
}
</script>

<style lang="less" scoped>
  .goods-card {
    margin: 0;
    background-color: white;
  }

  .delete-button {
    height: 100%;
  }
  .van-swipe-cell{
    margin: 5px 0;
  }
  .van-card__thumb {
    width: 120px;
  }
  .van-submit-bar{
    bottom: 50px;
  }
  .goodsList {
    margin-bottom: 55px;
  }

</style>