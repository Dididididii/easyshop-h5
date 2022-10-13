<template>
  <div class="contactContext">
    <van-nav-bar
      title="个人中心"
      placeholder 
      fixed
    />
    <div class="userInfo">
      <van-image
        class="userPhoto"
        fit="cover"
        round
        src="https://img01.yzcdn.cn/vant/cat.jpeg"
      />
      <div class="userBox">
        <div class="userName">
          <p class="name">用户名</p>
          <p class="number">账号：</p>
        </div>
        <van-icon class="set" @click="setShow = true" name="setting-o" />
      </div>
    </div>
    <div class="userCard">
        <div class="cartItem" v-for="item in cartList" :key="item.title">
          <van-icon class="icon" :name="item.name" />
          <p class="title">{{item.title}}</p>
        </div>
        
    </div>
    <van-popup v-model="setShow" position="right" :style="{ height: '100%' , width:'100%' }" closeable >
      <div class="setBox">
        <div class="userInfo" @click="updateShow=true">
          <van-image
            class="setPhoto"
            fit="cover"
            round
            src="https://img01.yzcdn.cn/vant/cat.jpeg"
          />
          <div class="userBox">
            <div class="userName">
              <p class="name">用户名</p>
              <p class="number">账号：</p>
            </div>
            <van-icon class="right"  name="arrow" />
          </div>
      </div>
        <div class="address" @click="updateShow=true">
          <div class="userInfo">
            <div class="userBox">
              <div class="userName">
                <p class="name">我的收货地址</p>
              </div>
              <van-icon class="right"  name="arrow" />
            </div>
          </div>
        </div>
        <div class="security" @click="updateShow=true">
          <div class="userInfo">
            <div class="userBox">
              <div class="userName">
                <p class="name">账号与安全</p>
              </div>
              <van-icon class="right"  name="arrow" />
            </div>
          </div>
        </div>
      </div>
      <van-button  type="default" block size="small">退出登录</van-button>
      <van-popup v-model="updateShow" position="right" :style="{ height: '100%', width:'100%' }" closeable >
        <div class="updateBox">
          123123
        </div>
      </van-popup>
    </van-popup>
  </div>
</template>

<script>
export default {
    name:'easy-Contact',
    data(){
      return {
        cartList:[
          {
            title:'收藏',
            name:'star-o'
          },
          {
            title:'订阅',
            name:'sign'
          },
          {
            title:'足迹',
            name:'underway-o'
          },
          {
            title:'待付款',
            name:'idcard'
          },
          {
            title:'待发货',
            name:'send-gift-o'
          },
          {
            title:'待收货',
            name:'logistics'
          },
          {
            title:'待评价',
            name:'chat-o'
          },
          {
            title:'退款/售后',
            name:'after-sale'
          }
        ],
        setShow:false,
        updateShow:false
      }
    }
}
</script>

<style lang="less" scoped>
.right {
  font-size:14px;
}
.userInfo{
  margin: 5px 0;
  border-bottom: 1px solid #f1f1f1;
  .setPhoto{
  width: 64px;
  height: 64px;
  }

}

.setBox ,.updateBox{
  margin:50px 10px 0  10px;
}
.userCard{
  display: flex;
  flex-wrap: wrap;
  .cartItem {
    width: 66px;
    height: 66px;
    text-align: center;
    margin:10px;
  }
  p{
    margin:5px 0;
  }
    .icon{
      font-size: 37.5px;
    }
    .title{
      font-size: 14px;
    }
  
}

.set{
  font-size: 20.8px;
}
.userPhoto{
  width: 64px;
  height: 64px;
}
.userInfo{
  padding: 5px;
  display: flex;
  // align-items: center;
  background-color: #fff;
  .userBox{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex:1;
    margin-right: 10px;
    .userName{
    // margin-left: 10px ;
      .name{
        font-size: 14px;
      }
      .number{
        font-size: 12px;
        color:#888;
        margin-top: 5px;
      }
      p{
        margin:5px 10px;
      }
    }
  }
  
}
.userCard{
  margin: 10px;
  // height: 200px;
  background-color: #fff;
  border-radius: 10px;
}
</style>