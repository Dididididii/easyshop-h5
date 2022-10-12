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
          @click="toSearch"
        >
          <template #action>
            <div  class="searchBtn">登录</div>
          </template>
        </van-search>
      </header>
      <!-- 导航栏 -->
      <nav>
        <van-tabs v-model="active" class="tabs" sticky offset-top="44px">
          <van-tab  v-for="i in navbsList" :title="i" :key="i">
            <!-- 轮播图 -->
            <section>
              <div class="main">
                  <van-swipe :autoplay="3000">
                      <van-swipe-item v-for="(image, index) in images" :key="index">
                          <van-image
                              class="swipeImages"
                              fit="cover"
                              :src="image"
                              lazy-load
                          />
                      </van-swipe-item>
                  </van-swipe>
              </div>
            </section>
            <main v-if="active === 0">
              <!-- 分类 -->
              <div class="classBox">
                <div class="classItem" v-for="i in 8" :key="i" >
                  <van-image
                    class="classImages"
                    fit="cover"
                    src="https://yanxuan.nosdn.127.net/79b904ccd106d3875a90d4430f2e8ad2.png?quality=95&imageView"
                    lazy-load
                  />
                  <p class="classTitle">网易黑猪</p>
                </div>
              </div>
              <!-- 好物推荐 -->
              <div class="title">
                <h3>好物推荐</h3>
                <span>新鲜出炉 品质靠谱</span>
              </div>
              <div class="goodsRecommend">
                <div class="goodsCard" v-for="i in 6" :key="i">
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
              <!-- 猜你喜欢 -->
              <div class="title">
                <h3>猜你喜欢</h3>
              </div>
              <div class="goodsLike">
                <div class="goodsCard" v-for="i in 6" :key="i">
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
            </main>
            <main v-else>
              <div class="goodsLike">
                <div class="goodsCard" v-for="i in 6" :key="i">
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
            </main>
          </van-tab>
        </van-tabs>
      </nav>
    </div>
  </template>
  
  <script>
  export default {
      name:'easy-Home',
      data(){
          return {
              isToken:false,
              navbsList:['首页','居家','美食','服饰','母婴','个护','严选','数码','运动','杂项'],
              searchText:'',
              images:['http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-15/dfc11bb0-4af5-4e9b-9458-99f615cc685a.jpg','http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-15/dfc11bb0-4af5-4e9b-9458-99f615cc685a.jpg','http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-15/dfc11bb0-4af5-4e9b-9458-99f615cc685a.jpg','http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-15/dfc11bb0-4af5-4e9b-9458-99f615cc685a.jpg','http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-15/dfc11bb0-4af5-4e9b-9458-99f615cc685a.jpg'],
              active:0
          }
      },
      methods:{
        toSearch(){
          this.$router.push('/search?fromPage=index')
        }
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
    margin:49px 5px 5px 13px;
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
    .goodsCard{
        width: 160px;
        height: 233px;
        text-align: center;
        margin: 5px;
        border-radius: 8px;
        background-color: #fff;
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
      .goodsCard:last-child {
        margin-right: 1;
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