<template>
  <div :style="{display:'flex', flexWrap: warp?'wrap':'nowrap',justifyContent: 'space-around'}">
    <div class="goodsCard" v-for="item in goodsList" :key="item.id" @click="toGoods">
        <van-image
            class="goodsImage"
            radius="8px"
            fit="cover"
            lazy-load
            :src="item.picture"
        />
        <p class="goodsTitle">{{item.name}}</p>
        <p class="goodsPirce">￥{{item.price}}</p>
    </div>
  </div>
</template>

<script>
export default {
    name:'easy-Card',
    props:{
        warp:{
          type:Boolean,
          default:true
        },
        active:{
          type:Number,
          default:0
        },
        goodsList:{
          type:Array,
          default:()=>[]
        }
    },
    methods:{
        toGoods(){
          this.$router.push('/goods?id=10002')
        }
    }
}
</script>

<style lang="less" scoped>
.goodsCard:last-child {
        margin-right: 1;
}
.goodsCard{
        width: 160px;
        height: 233px;
        text-align: center;
        margin: 5px;
        border-radius: 8px;
        background-color: #fff;
        padding-bottom: 5px;
        .goodsImage{
          width: 160px;
          height: 160px;
        }
        .goodsTitle {
          width: 135px;
          height: 40px;
          overflow: hidden;
          text-overflow:ellipsis;
          font-size: 15px;
          padding: 0px 10px;
          // text-indent: 10px;
          margin-right: 5px;
        }
        p{
          margin: 0;
        }
        .goodsPirce{
          font-size: 18px;
          margin-top: 5px;
          color:red;
          font-weight: 500;
        }
      }
</style>