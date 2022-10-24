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
            <div v-if="!$store.state.user.profile.token" @click="$router.push('/login?from=/')" class="searchBtn">登录</div>
          </template>
        </van-search>
      </header>
      <!-- 导航栏 -->
      <nav>
        <van-tabs v-model="active" class="tabs" sticky offset-top="1.4rem">
          <van-tab  v-for="item in navbsList" :title="item.name" :key="item.id">
            <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
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
              <!-- 推荐区 -->
              <div class="recommend">
                <div class="recommendItem" @click="updateCecommend(0)">
                  <van-image
                    class="recommendImage"
                    lazy-load
                    fit="cover"
                    :src="recommendList[0].picture"
                  />
                  <p class="recommendText">{{recommendList[0].title}}</p>
                </div>
                <div class="recommendItem">
                  <div class="recommendItems" @click="updateCecommend(1)">
                    <van-image
                      lazy-load
                      fit="cover"
                      class="recommendImages"
                      :src="recommendList[1].picture"
                    />
                    <p class="recommendText">{{recommendList[1].title}}</p>
                  </div>
                  <div class="recommendItems" @click="updateCecommend(2)">
                    <van-image
                      lazy-load
                      fit="cover"
                      class="recommendImages"
                      :src="recommendList[2].picture"
                    />
                    <p class="recommendText">{{recommendList[2].title}}</p>
                  </div>
                </div>
              </div>
              <!-- 好物推荐 -->
              <div class="title" v-if="simples.length>0">
                <h3>{{title}}</h3>
              </div>
              <div class="goodsRecommend">
                <easyCard :warp="false" :goodsList="simples" />
              </div>
              <!-- 推荐商品 -->
              <div class="title">
                <h3>推荐商品</h3>
              </div>
              <div class="goodsLike">
                <van-list
                  offset="100"
                  v-model="loading"
                  :finished="finished"
                  finished-text="没有更多了"
                  @load="onLoad"
                >
                  <easyCard :goodsList="likeList" />
                </van-list>
              </div>
            </main>
            <main v-else>
              <div class="goodsLike">
                <easyCard :active="active" :goods-list="navbsList[active].goods" />
              </div>
            </main>
            </van-pull-refresh>
          </van-tab>
        </van-tabs>
      </nav>
    </div>
  </template>
  
  <script>
  import easyCard from '@/components/easy-card.vue'
  import { getCateList , getBanner,getSimple,getUserLike,getInVogue } from '@/api/home.js'
  export default {
    name:'easy-Home',
    components:{easyCard},
    data(){
          return {
              title:'',
              recommendList:[],
              isLoading: false,
              loading:false,
              finished:false,
              isToken:false,
              navbsList:[],
              searchText:'',
              moveList:[],
              banner:[],
              active:0,
              simples:[],
              likeList:[],
              config:{
                page:1,
                pageSize:10
              },
              counts:0,
              num:4
          }
    },
    methods:{
        updateCecommend(index) {
          if(this.num!==index) {
            this.num = index
            this.title = this.recommendList[index].title
            this.simples = this.recommendList[index].goods
          } else {
            this.num = 4
            this.simples = []
            this.title = ''
          }
        },
        async getCateLista () {
          this.moveList=[]
          const list = {id:0,name:'首页'}
          const res = await getCateList()
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
          let config = {
              title:'爆款推荐',
              goods:[],
              picture:''
            }
          const res = await getSimple()
          const data = await getInVogue()
          const {result} = await getUserLike()
          data.result.byDay.forEach(item=>{
            config.goods.push(item)
          })
          data.result.byTotal.forEach(item=>{
            config.goods.push(item)
          })
          data.result.byWeek.forEach(item=>{
            config.goods.push(item)
          })
          config.picture = config.goods[0].picture
          this.recommendList.push(config)
          this.recommendList.push({
            title:'好物推荐',
            goods:res.result.newProduct,
            picture:res.result.newProduct[0].picture
          })
          // this.simples = res.result.newProduct
          this.recommendList.push({
            title:'猜你喜欢',
            goods:result.items,
            picture:result.items[0].picture
          })
        },
        async getUserLikes() {
          const res = await getUserLike(this.config)
          this.likeList.push(...res.result.items)
          this.counts = res.result.counts
        },
        onLoad() {
          let timer = null
          if(timer === null) {
            timer = setInterval(()=>{
              this.config.page++
              this.getUserLikes()
              this.loading = false
              if(this.likeList.length >= this.counts) {
                this.finished = true
              }
              clearInterval(timer)
              timer=null
            },1000)
          }
        },
        onRefresh() {
          this.simples=[]
          this.likeList=[]
          this.config = {
            page:1,
            pageSize:10
          }
          this.getSimples()
          this.getUserLikes()
          this.$toast('刷新成功');
          this.isLoading = false;          
        },
    },
    created(){
        this.likeList=[]
        this.getCateLista()
        this.getHomeBanner()
        this.getSimples()
        this.getUserLikes()
    }
  }
  </script>
  
  <style lang="less" scoped>
  .recommend{
    margin:0 5px 0 13px;
    display:flex;
    height: 200px;
    .recommendItems{
      position: relative;
    }
    .recommendItem{
      position: relative;
      .recommendText{
        color:#fff;
        margin:0;
        font-size: 16px;
        font-weight: 600;
        position: absolute;
        text-align: center;
        opacity: 0.5;
        top:48%;
        left:0;
        border-radius: 8px;
        background-color: #000;
        width: 100%;
      }
    }

    .recommendItem:last-child {
      margin-left: 2px;
      flex:1;
    }
    .recommendImage{
      height: 200px;
      width: 130px;
    }
    .recommendImages{
      width: 100%;
      height: 99px;
      display: block;
    }
    .recommendItems:last-child{
      margin-top: 2px;
    }
  }
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