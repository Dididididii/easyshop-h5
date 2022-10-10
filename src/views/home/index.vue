<template>
    <div class="home">
      <!-- 头部区域 -->
      <header>
        <div class="logoBox">
          <img class="logo" src="@/assets/imgs/logo.png" alt="">
        </div>
        <van-search
          v-model="searchText"
          show-action
          placeholder="请输入搜索关键词"
        >
          <template #action>
            <div class="searchBtn">搜索</div>
          </template>
        </van-search>
      </header>
      <!-- 导航栏 -->
      <nav>
        <van-tabs class="tabs">
          <van-tab  v-for="index in navbsList" :title="index" :key="index">
          </van-tab>
        </van-tabs>
      </nav>
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
    </div>
  </template>
  
  <script>
  export default {
      name:'easy-Home',
      data(){
          return {
              navbsList:['首页','居家','美食','服饰','母婴','个护','严选','数码','运动','杂项'],
              searchText:'',
              images:['http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-15/dfc11bb0-4af5-4e9b-9458-99f615cc685a.jpg','http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-15/dfc11bb0-4af5-4e9b-9458-99f615cc685a.jpg','http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-15/dfc11bb0-4af5-4e9b-9458-99f615cc685a.jpg','http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-15/dfc11bb0-4af5-4e9b-9458-99f615cc685a.jpg','http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-15/dfc11bb0-4af5-4e9b-9458-99f615cc685a.jpg']
          }
      }
  }
  </script>
  
  <style lang="less" scoped>
  header {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-evenly;
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
    .tabs:first-child{
      margin-left: -8px;
    }
  }
  section{
    margin: 5px;
    .main{
        
        .swipeImages{
        width: 100%;
        height: 200px;
        }
    }
  }
  </style>