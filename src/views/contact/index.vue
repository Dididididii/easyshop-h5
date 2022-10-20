<template>
  <div class="contactContext" v-if="$store.state.user.profile.token">
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
        :src="$store.state.user.profile.avatar"
      />
      <div class="userBox">
        <div class="userName">
          <p class="name">{{$store.state.user.profile.nickname?$store.state.user.profile.nickname:'无忧商城用户'}}</p>
          <p class="number">账号：{{$store.state.user.profile.account}}</p>
        </div>
        <van-icon class="set" @click="setShow = true" name="setting-o" />
      </div>
    </div>
    <div class="userCard">
        <div class="cartItem" v-for="item in cartList" :key="item.title" @click="toCollect(item.title)">
          <van-icon class="icon" :name="item.name" />
          <p class="title">{{item.title}}</p>
        </div>
    </div>
    <van-popup v-model="setShow" position="right" :style="{ height: '100%' , width:'100%' }" closeable >
      <div class="setBox">
        <div class="userInfo" @click="updateUser(1)">
          <van-image
            class="setPhoto"
            fit="cover"
            round
            :src="$store.state.user.profile.avatar"
          />
          <div class="userBox">
            <div class="userName">
              <p class="name">{{$store.state.user.profile.nickname?$store.state.user.profile.nickname:'无忧商城用户'}}</p>
              <p class="number">账号：{{$store.state.user.profile.account}}</p>
            </div>
            <van-icon class="right"  name="arrow" />
          </div>
      </div>
        <div class="address" @click="updateUser(2)">
          <div class="userInfo">
            <div class="userBox">
              <div class="userName">
                <p class="name">我的收货地址</p>
              </div>
              <van-icon class="right"  name="arrow" />
            </div>
          </div>
        </div>
        <div class="security" @click="updateUser(3)">
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
      <van-button  type="default" block size="small" @click="toBack">退出登录</van-button>
      <van-popup v-model="updateShow" position="right" :style="{ height: '100%', width:'100%' }" >
        <van-nav-bar
          :title="title"
          left-arrow
          @click-left="updateShow=false"
        />
        <div class="updateBox" >
           <!-- 修改用户名的 -->
          <div class="upateUser" v-if="active === 1">
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
          <div class="updateAddress" v-else-if="active===2" >
            <van-address-list
              v-model="chosenAddressId"
              :list="list"
              default-tag-text="默认"
              @add="onAdd"
              @edit="onEdit"
              @select="selectCheck"
            />
            <!-- <van-popup v-model="addressShow" position="right" :style="{ height: '100%', width:'100%' }"  >
            <div>
              <van-nav-bar
                :title="`${newAddss?'添加':'修改'}`+'地址'"
                left-arrow
                @click-left="addressShow=false"
              />
              <div>
                <van-address-edit                  
                  :area-list="areaList"
                  show-postal
                  :address-info="addressInfo"
                  :show-delete="!newAddss"
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
          </van-popup> -->
          <easyPopup :address-info="addressInfo" :addressShow="addressShow" :newAddss="newAddss" :searchResult="searchResult" @save="onSave" @delete="onDelete" @closePopup="(e)=>addressShow=e" />
          </div>
        </div>
      </van-popup>
    </van-popup>
  </div>
</template>

<script>
import { areaList } from '@vant/area-data';
import easyPopup from '@/components/easy-popup.vue'
import { getAddress,addAddress,updateAddress,delAddress } from '@/api/contact'
export default {
    components:{easyPopup},
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
        addressInfo:{
          id:'0',
          name:'',
          tel:'',
          province:'',
          city:'',
          county:'',
          addressDetail:'',
          areaCode:'',
          postalCode:'',
          isDefault:false
        },	
        active:0,
        addressList:[],
        title:'',
        setShow:false,
        updateShow:false,
        newAddss:false,
        show:false,
        value:'',
        chosenAddressId: '1',
        addressShow:false,
        areaList,
        searchResult: [],
        list: [],
        addressId:''
      }
    },
    methods:{
      selectCheck(item,index){
        this.list.forEach(item => {
          item.isDefault=false
        })
        this.list[index].isDefault=true
        this.list.splice(index,1)
        this.list.unshift(item)
      },
      async getUserAddress() {
        this.list = []
        const {result} = await getAddress()
        result.forEach(item => {
          this.list.unshift(
            {
              id:item.id,
              name:item.receiver,
              tel:item.contact,
              address:item.provinceCode+item.cityCode+item.countyCode+item.address,
              isDefault:false
            }
          )
        })
        this.addressList = result.reverse()
        if(this.list.length>0) {
          this.chosenAddressId = this.list[0].id
          this.list[0].isDefault= true
        }
      },
      updateUser(val) {
        this.updateShow= true
        this.active = val
        if(val === 1) {
          this.title = '修改用户资料'
        } else if (val===2) {
          this.title = '我的收货地址'
          this.getUserAddress()
        } else {
          this.title = '账号安全'
        }
      },
      toCollect(title) {
        if(title === '收藏') {
          this.$router.push('/collect')
        }
      },
      toBack(){
        this.$store.commit('user/setUserInfo',{})
        this.$toast('退出成功')
        this.$router.push('/')
      },
      onAdd() {
        // this.$toast('新增地址');
        this.addressShow = true
        this.newAddss = true
        this.addressInfo={
          id:'0',
          name:'',
          tel:'',
          province:'',
          city:'',
          county:'',
          addressDetail:'',
          areaCode:'',
          postalCode:'',
          isDefault:false
        }
      },
      onEdit(e,index) {
        this.addressShow=true
        this.newAddss = false
        const config = this.addressList[index]
        this.addressId = config.id
        this.addressInfo = { 
          id:config.id,
          name:config.receiver,
          tel:config.contact,
          province:config.provinceCode,
          city:config.cityCode,
          county:config.countyCode,
          addressDetail:config.address,
          areaCode:'110100',
          postalCode:config.postalCode,
          isDefault:config.isDefault===0
        }
      },
      async onSave(e) {
        console.log(e);
        const config = {
            receiver:e.name,
            contact:e.tel,
            provinceCode:e.province,
            cityCode:e.city,
            countyCode:e.county,
            address:e.addressDetail,
            postalCode:e.postalCode,
            addressTags:'家',
            isDefault:e.isDefault?0:1
        }
        if(this.newAddss){
          //新增
          try {
            await addAddress(config)
            this.$toast('添加地址成功')
          } catch (error) {
            this.$toast(error.response.data.message)
          }
        } else{
          // 修改
          try {
            await updateAddress(this.addressId,config)
            this.$toast('地址修改成功')
          } catch (error) {
            this.$toast(error.response.data.message)
          }
        }
        this.getUserAddress()
        this.addressShow = false
        this.addressInfo = { 
          id:'0',
          name:'',
          tel:'',
          province:'',
          city:'',
          county:'',
          addressDetail:'',
          areaCode:'',
          postalCode:'',
          isDefault:false
        }
      },
      async onDelete() {
        try {
            await delAddress(this.addressId)
            this.$toast('地址删除成功')
          } catch (error) {
            this.$toast(error.response.data.message)
          }
        this.getUserAddress()
        this.addressShow = false
        this.addressInfo = { 
          id:'0',
          name:'',
          tel:'',
          province:'',
          city:'',
          county:'',
          addressDetail:'',
          areaCode:'',
          postalCode:'',
          isDefault:false
        }
      }
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