<template>
    <div class="context">
      <!-- 头部区域 -->
      <header>
        <div class="logoBox">
          <img class="logo" src="@/assets/imgs/logo.png" alt="">
        </div>
        <van-search
          v-model="searchText"
          show-action
          placeholder="搜索商品"
          @click="$router.push('/search')"
        >
          <template #action>
            <div  class="searchBtn">登录</div>
          </template>
        </van-search>
      </header>
      <!-- 导航栏 -->
      <nav>
        <van-tabs v-model="active" class="tabs" sticky offset-top="1.4rem">
          <van-tab  v-for="item in navbsList" :title="item.name" :key="item.id">
            <!-- 轮播图 -->
            <section>
              <div class="main">
                  <van-swipe :autoplay="3000">
                      <van-swipe-item v-for="item in banner" :key="item.id">
                          <van-image
                              class="swipeImages"
                              fit="cover"
                              :src="item.imgUrl"
                              lazy-load
                          />
                      </van-swipe-item>
                  </van-swipe>
              </div>
            </section>
            <main v-if="active === 0">
              <!-- 分类 -->
              <div class="classBox">
                <div class="classItem" v-for="item in moveList" :key="item.id" >
                  <van-image
                    class="classImages"
                    fit="cover"
                    :src="item.picture"
                    lazy-load
                  />
                  <p class="classTitle">{{item.name}}</p>
                </div>
              </div>
              <!-- 好物推荐 -->
              <div class="title">
                <h3>好物推荐</h3>
                <span>新鲜出炉 品质靠谱</span>
              </div>
              <div class="goodsRecommend">
                <easyCard :warp="false" :goodsList="simples" />
              </div>
              <!-- 猜你喜欢 -->
              <div class="title">
                <h3>猜你喜欢</h3>
              </div>
              <div class="goodsLike">
                <easyCard />
              </div>
            </main>
            <main v-else>
              <div class="goodsLike">
                <easyCard :active="active" :goods-list="navbsList[active].goods" />
              </div>
            </main>
          </van-tab>
        </van-tabs>
      </nav>
    </div>
  </template>
  
  <script>
  import easyCard from '@/components/easy-card.vue'
  import { getCateList , getBanner,getSimple } from '@/api/home.js'
  export default {
      name:'easy-Home',
      components:{easyCard},
      data(){
          return {
              isToken:false,
              navbsList:[],
              searchText:'',
              moveList:[],
              banner:[],
              active:0,
              simples:[]
          }
      },
      methods:{
        async getCateLista () {
          this.moveList=[]
          const list = {id:0,name:'首页'}
          const res = await getCateList('/home/category/head')
          this.navbsList = res.result
          this.navbsList.unshift(
            list
          )
          for(let i =1;i<=8;i++){
            this.moveList.push(this.navbsList[i])
          }
        },
        async getHomeBanner() {
          const res = await getBanner()
          this.banner = res.result
        },
        async getSimples() {
          const res = await getSimple()
          this.simples = res.result.newProduct
        }
      },
      created(){
        this.getCateLista()
        this.getHomeBanner()
        this.getSimples()
      }
  }
  </script>
  
  <style lang="less" scoped>
  header {
    background-color: #fff;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-evenly;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    .logoBox{
      .logo{
        // margin-left: 10px;
        width: 66px;
        height: 20px;
      }
    }
    // .van-search--show-action{
    //   margin-left: -21px;
    // }
    .searchBtn{
      background-color: orange;
      border-radius: 8px;
      width: 42px;
      text-align: center;
      color:#fff;
    }
  }
  nav{
    background-color: #f0f9f4;
    .van-sticky{
      top:44px;
    }
    .tabs:first-child{
      margin-left: -8px;
    }
    
    section{
    margin:59px 5px 5px 13px;
    .main{
        
        .swipeImages{
        width: 100%;
        height: 200px;
        }
      }
    }
  main{
    .classBox{
      background-color: #fff;
      margin: 5px 5px 5px 13px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-around;
      border-radius: 8px;
      .classItem{
        margin: 0 10px 5px 0;
        width:64px ;
        height: 85px;
        text-align: center;
        .classImages{
          width: 60px;
          height: 60px;
        }
        .classTitle{
          margin: 0;
          font-size: 14px;
          overflow:hidden;
          text-overflow:ellipsis;
        }
      }
    }
    .goodsRecommend{
      width: 374px;
      // height: 300px;
      //background-color: pink;
      display: flex;
      flex-wrap: nowrap;
      overflow-x: auto;
      overflow-y: hidden;
      margin-left:9px;
      &::-webkit-scrollbar{// 滚动条整体
          background:none;
      }
    }
    
      
    .goodsLike{
      margin-left: 5px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    }
  }
  .title{
    align-items: center;
    justify-content: center;
    display: flex;
    h3 {
      font-size: 16px;
      font-weight: 400;
      // margin-left: 40px;
    }
    span {
      margin: 16px 10px;
      font-size: 12px;
      color:#888;
    }
  }
}
  
  </style>