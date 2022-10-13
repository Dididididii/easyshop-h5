<template>
  <div class="cateContext">
    <nav class="navBar">
      <van-search @click="$router.push('/search')" input-align="center" v-model="value" placeholder="请输入搜索关键词" />
    </nav>
  <main class="context">
    <van-sidebar v-model="activeKey">
      <van-sidebar-item v-for="i in cateList" :key="i" :title="i" />
    </van-sidebar>
    <div class="cateBox">
      <div class="cateList">
          <div div class="cateItem" v-for="i in 60" :key="i">
            <van-image
              class="cateImages"
              fit="contain"
              src="https://yanxuan.nosdn.127.net/3102b963e7a3c74b9d2ae90e4380da65.png?quality=95&imageView"
            />
              <p class="cateName">茶咖酒具</p>
          </div>
        </div>
      </div>
  </main>
  </div>
</template>

<script>
export default {
    name:'easy-CateList',
    data(){
      return {
        activeKey:0,
        cateList:['居家','美食','服饰','母婴','个护','严选','数码','运动','杂项'],
        value:''
      }
    }
}
</script>

<style lang="less" scoped>
.van-sidebar{
  overflow-x: hidden;
  overflow-y: auto;
  height: calc(100vh - 104px);
  &::-webkit-scrollbar{// 滚动条整体
    background:none;
  }
}
.navBar{
  width: 100%;
  position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
}
.cateImages{
  width: 64px;
  height:64px;
}
.context {
  display: flex;
  margin-top:54px;
  .cateBox{
    flex: 1;
    overflow-x: hidden;
    overflow-y: auto;
    height: calc(100vh - 104px);
    // width: calc(100vh - 80px);;
    &::-webkit-scrollbar{// 滚动条整体
      background:none;
    }
    background-color: #fff;
    .cateList {
      display: flex;
      flex-wrap: wrap;
      .cateItem {
        margin: 2.764px;
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