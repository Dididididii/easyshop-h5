<template>
  <div class="cartContext">
    <van-nav-bar
      title="购物车"
      placeholder 
      fixed
    />
    <!-- 正常的购物车 -->
    <div class="goodsList" >
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
    <div class="notLogin" v-if="false">
      <van-empty image="error" description="您还未登录">
        <van-button round type="danger" class="bottom-button">去登陆</van-button>
      </van-empty>
    </div>
    <!-- 登录后购物车无商品 -->
    <div class="notGoodsList" v-if="false">
      <van-empty
        class="custom-image"
        image="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.xabanjan.com%2Ftemplates%2Fshop%2F186%2Fimages%2Fnone.png&refer=http%3A%2F%2Fwww.xabanjan.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668176201&t=ccadaa10333db2d786588bd14f2d1f45"
        description="去添加点什么吧"
      />
    </div>
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
    },
    methods:{
      onSubmit(){

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
  .custom-image .van-empty__image {
    width: 90px;
    height: 90px;
  }
  .bottom-button {
    width: 160px;
    height: 40px;
  }
</style>