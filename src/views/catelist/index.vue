<template>
  <div class="cateContext" v-if="cateList.length>0" >
    <nav class="navBar">
      <van-search @click="$router.push('/search')" input-align="center" v-model="value" placeholder="请输入搜索关键词" />
    </nav>
  <main class="context">
    <van-sidebar v-model="activeKey">
      <van-sidebar-item v-for="item in cateList" :key="item.id" :title="item.name" />
    </van-sidebar>
    <div class="cateBox">
      <div class="cateList" >
          <div div class="cateItem" v-for="children in cateList[activeKey].children" :key="children.id">
            <van-image
              class="cateImages"
              fit="contain"
              :src="children.picture"
            />
              <p class="cateName">{{children.name}}</p>
          </div>
        </div>
      </div>
  </main>
  </div>
</template>

<script>
import {getCateList} from '@/api/home.js'
export default {
    name:'easy-CateList',
    data(){
      return {
        activeKey:0,
        cateList:[],
        value:''
      }
    },
    methods:{
      async getCateLists(){
        const res = await getCateList()
        this.cateList = res.result
      }
    },
    created(){
      this.getCateLists()
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
          height: 40px;
          overflow: hidden;
          font-size: 14px;
          text-align: center;
        }
      }
    }
    
  }
}
</style>