<template>
  <div class="placeContext">
    <van-nav-bar
      title="提交订单"
      placeholder 
      fixed
      left-arrow
      @click-left="$router.go(-1)"
    />
    <div class="box">
      <!-- 收货地址 -->
      <div class="AddressList">
        <van-address-list
          @select="selectChange"
          :list="checkList"
          @edit="onEdit"
          v-model="chosenAddressId"
        >
          <template #default>
            <div>
              <van-button @click="onAdd" v-if="open || checkList.length<=0" class="Addressbtn" type="danger" block size="normal">新增地址</van-button>
              <div class="btn" v-if="!open" @click="updateAddress">选择其他地址</div>
              <div class="btn" v-else @click="guanAddress">取消选择</div>
            </div>
          </template>
        </van-address-list>
      </div>
      <!-- 商品列表 -->
      <div class="goodsList">
        <div class="goodsItem" v-for="goods in $store.state.goods.goodsList" :key="goods.id">
          <van-card
            @click="$router.push(`/goods?id=${goods.id}`)"
            v-for="item in goods.specs"
            :key="item.id"
            :num="item.count"
            :price="item.price/100"
            :desc="item.desc"
            :title="goods.name"
            :thumb="item.picture"/>
        </div>
      </div>
    </div>
    <easyPopup :address-info="addressInfo" :addressShow="addressShow" :newAddss="newAddss" :searchResult="searchResult" @closePopup="closePopup" @save="onSave" @delete="onDelete" />
  </div>
</template>

<script>
import easyPopup from '@/components/easy-popup.vue'
import { areaList } from '@vant/area-data';
import { getAddress,delAddress,addAddress,updateAddress } from '@/api/contact'
export default {
    components:{easyPopup},
    name:'easy-Place',
    data() {
      return {
        addressShow:false,
        chosenAddressId:'1',
        list: [],
        checkList:[],
        open:false,
        areaList,
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
          isDefault:false,
          addressList:[]
        },
        newAddss:false,
        searchResult: [],
      }
    },
    methods:{
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
      guanAddress(){
        this.open = false
        if(this.checkList.length>0) {
          this.checkList=[]
          this.checkList.push(this.list[0])
        }
      },
      updateAddress(){
        this.open = true
        this.checkList = this.list
      },
      selectChange(e){
        this.checkList = []
        this.checkList.push(e)
        if(this.open) this.open =false
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
        this.list = this.list.reverse()
        this.addressList = result.reverse()
        if(this.list.length>0) {
          this.chosenAddressId = this.list[0].id
          this.checkList.push(this.list[0])
        }
      },
      closePopup(e) {
        this.addressShow = e
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
        this.checkList = []
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
    },
    created() {
      this.getUserAddress()
      console.log(this.$store.state.goods.goodsList);
    }
}
</script>

<style lang="less" scoped>
.van-address-list {
  padding: 12px;
}
.Addressbtn{
  margin-top: 10px;
  border-radius: 30px;
}
.van-address-list__bottom{
  display: none;
}
.btn{
  margin-top:5px;
  font-size: 14px;
  background-color: #fff;
  width: 90px;
  text-align: center;
  border: 1px solid #f1f1f1;
  border-radius: 8px;
}
</style>