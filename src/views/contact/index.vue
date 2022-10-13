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
        <van-icon class="set" name="setting-o" />
      </div>
    </div>
    <div class="userCard">
        
    </div>
  </div>
</template>

<script>
export default {
    name:'easy-Contact'
}
</script>

<style lang="less" scoped>
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
  height: 200px;
  background-color: #fff;
  border-radius: 10px;
}
</style>