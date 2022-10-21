<template>
  <div class="cartContext">
    <van-nav-bar
      title="购物车"
      placeholder 
      fixed
    />
    <!-- 正常的购物车 -->
    <div class="goodsList" v-if="cartList.length>0" >
      <van-swipe-cell v-for="item in cartList" :key="item.skuId">
        <van-card
          :num="item.count"
          :price="item.price"
          :title="item.name"
          :desc="item.attrsText"
          class="goods-card"
        >
        <template #thumb >
          <div style="display:flex;">
            <van-checkbox @change="(e)=>onCheckChange(e,item.skuId,item.count)" v-model="item.selected"></van-checkbox>
            <van-image
              @click="$router.push(`/goods?id=${item.id}`)"
              style="margin-left: 10px;"
              class="cartImages"
              fit="cover"
              :src="item.picture"
            />
          </div>
        </template>
        <template #num >
          <van-stepper v-model="item.count" @change="(e)=> onChange(e,item.skuId,item.selected)" />
        </template>
      </van-card>
        <template #right>
          <van-button @click="delCarts(item.skuId)" square text="删除" type="danger" class="delete-button" />
        </template>
      </van-swipe-cell>
    </div>
    <!-- 登录后购物车无商品 -->
    <div class="notGoodsList" v-else-if="!noneToken">
      <van-empty
        class="custom-image"
        image="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.xabanjan.com%2Ftemplates%2Fshop%2F186%2Fimages%2Fnone.png&refer=http%3A%2F%2Fwww.xabanjan.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668176201&t=ccadaa10333db2d786588bd14f2d1f45"
        description="去添加点什么吧"
      />
    </div>
    <!-- 未登录的购物车 -->
    <div class="notLogin" v-if="noneToken">
      <van-empty image="error" description="您还未登录">
        <van-button round type="danger" class="bottom-button" @click="$router.push(`/login?from=/cart`)">去登陆</van-button>
      </van-empty>
    </div>
    <footer v-if="!noneToken">
      <van-submit-bar :price="price" button-text="提交订单" @submit="onSubmit">
        <van-checkbox v-model="allCheck" >全选</van-checkbox>
      </van-submit-bar>
    </footer>
  </div>
</template>

<script>
import { getCart,delCart,updatCart } from '@/api/cart'
export default {
    name:'easy-cart',
    data(){
      return {
        checked:false,
        noneToken:false,
        cartList:[],
      }
    },
    methods:{
      async onCheckChange(e,id,count) {
        await updatCart({id,count,selected:e})
      },
      async onChange(e,id,selected){
        // console.log(e,id);
        await updatCart({id,count:e,selected})
      },
      onSubmit(){
        this.$router.push('/place')
      },
      async getCartList() {
        const res = await getCart()
        this.cartList = res.result.valids
      },
      async delCarts(id) {
        await delCart({ids:[`${id}`],clearAll:false,clearInvalid:false})
        this.getCartList()
      }
    },
    created(){
      if(this.$store.state.user.profile.token) {
        this.getCartList()
      } else {
        this.noneToken = true
      }
    },
    computed:{
      allCheck:{
        get() {
          let isCheck = this.cartList.filter(item=>item.selected)
          if(isCheck.length===this.cartList.length) {
            return true
          }
          return false
        },
        set(val) {
          // console.log(val);
          this.cartList.forEach(item=>{
            item.selected=val
          })
      }
    },
    price() {
      let num = 0
      let checkGoods = this.cartList.filter(item=>item.selected)
      checkGoods.forEach(item => {
        num = num+item.price*item.count*100
      })
      return num
    }
  }
}
</script>

<style lang="less" scoped>
.cartImages{
  width: 88px;
  height: 88px;
}
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