<template>
  <div class="context">
    <van-sidebar v-model="activeKey">
      <van-sidebar-item v-for="i in cateList" :key="i" :title="i" />
    </van-sidebar>
    <div class="cateBox">
      <div class="cateList">
        <div class="cateItem" v-for="i in 6" :key="i">
          <van-image
            width="4rem"
            height="4rem"
            fit="contain"
            src="https://yanxuan.nosdn.127.net/3102b963e7a3c74b9d2ae90e4380da65.png?quality=95&imageView"
          />
          <p class="cateName">茶咖酒具</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'easy-CateList',
    data(){
      return {
        activeKey:0,
        cateList:['居家','美食','服饰','母婴','个护','严选','数码','运动','杂项']
      }
    }
}
</script>

<style lang="less" scoped>
.context {
  display: flex;
  .cateBox{
    flex: 1;
    height: calc(100vh - 50px);
    background-color: #fff;
    .cateList {
      display: flex;
      flex-wrap: wrap;
      .cateItem {
        margin: 4px;
        width: 64px;
        height: 90px;
        overflow: hidden;
        .cateName{
          margin: 0;
          width: 100%;
          font-size: 14px;
          text-align: center;
        }
      }
    }
    
  }
}
</style>