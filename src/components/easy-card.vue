<template>
  <div :style="{display:'flex', flexWrap: warp?'wrap':'nowrap',justifyContent: 'space-around'}">
    <div class="goodsCard" v-for="i in 6" :key="i" @click="toGoods">
        <van-image
            class="goodsImage"
            radius="8px"
            fit="cover"
            lazy-load
            src="https://yanxuan-item.nosdn.127.net/ddb4a80ac97a175bc633f0a53076815a.jpg"
        />
        <p class="goodsTitle">儿童多色圆领印花短袖T恤110-160cm</p>
        <p class="goodsPirce">￥59.00</p>
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