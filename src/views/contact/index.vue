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
      <van-popup v-model="updateShow" position="right" :style="{ height: '100%', width:'100%' }" >
        <van-nav-bar
          title="标题"
          left-arrow
          @click-left="updateShow=false"
        />
        <div class="updateBox" >
           <!-- 修改用户名的 -->
          <div class="upateUser" v-if="false">
            <div class="photoBox">
            <van-image
            class="photo"
            fit="cover"
            lazy-load
            round
            src="https://img01.yzcdn.cn/vant/cat.jpeg"
            />
          </div>
          <van-cell is-link title="名字" @click="show = true" />
          <van-popup v-model="show" position="right" :style="{ height: '100%', width:'100%' }"  >
            <div>
              <van-nav-bar
                title="标题"
                left-arrow
                @click-left="show=false"
              />
              <div>
                <van-cell-group>
                  <van-field v-model="value" placeholder="请输入用户名" />
                  <van-button type="default" block size="small">修改</van-button>
                </van-cell-group>
              </div>
            </div>
          </van-popup>
          </div>
          <!-- 查看收货地址 -->
          <div class="updateAddress" >
            <van-address-list
              v-model="chosenAddressId"
              :list="list"
              default-tag-text="默认"
              @add="onAdd"
              @edit="onEdit"
            />
            <van-popup v-model="addressShow" position="right" :style="{ height: '100%', width:'100%' }"  >
            <div>
              <van-nav-bar
                title="标题"
                left-arrow
                @click-left="addressShow=false"
              />
              <div>
                <van-address-edit
                  :area-list="areaList"
                  show-postal
                  show-delete
                  show-set-default
                  show-search-result
                  :search-result="searchResult"
                  :area-columns-placeholder="['请选择', '请选择', '请选择']"
                  @save="onSave"
                  @delete="onDelete"
                  @change-detail="onChangeDetail"
                />
              </div>
            </div>
          </van-popup>
          </div>
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
        updateShow:false,
        show:false,
        value:'',
        chosenAddressId: '1',
        addressShow:false,
        areaList:{
          110000: '北京市',
          120000: '天津市',
        },
        searchResult: [],
        list: [
          {
            id: '1',
            name: '张三',
            tel: '13000000000',
            address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
            isDefault: true,
          },
          {
            id: '2',
            name: '李四',
            tel: '1310000000',
            address: '浙江省杭州市拱墅区莫干山路 50 号',
          },
        ]
      }
    },
    methods:{
      onAdd() {
        this.$toast('新增地址');
      },
      onEdit() {
        this.addressShow=true
        // this.$toast('编辑地址:' + index);
      },
      onSave() {
        this.$toast('save');
      },
      onDelete() {
        this.$toast('delete');
      },
      onChangeDetail(val) {
        if (val) {
          this.searchResult = [
            {
              name: '黄龙万科中心',
              address: '杭州市西湖区',
            },
          ];
        } else {
          this.searchResult = [];
        }
      },
    }
}
</script>

<style lang="less" scoped>
.photoBox{
  display: flex;
  margin: 10px 0;
  .photo{
    width:64px;
    height: 64px;
    margin: auto;
  }
}

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

.setBox {
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