<template>
  <div class="placeContext">
    <van-nav-bar
      title="提交订单"
      placeholder 
      fixed
      left-arrow
      @click-left="goBack"
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
        <div class="goodsItem" v-for="goods in $store.state.goods.goodsList" :key="goods.specs.skuId">
          <van-card
            @click="$router.push(`/goods?id=${goods.id}`)"
            v-for="item in goods.specs"
            :key="item.id"
            :num="item.count"
            :price="item.price/100"
            :desc="item.desc"
            :title="goods.name"
            :thumb="item.picture"/>
            <van-cell is-link>
              <!-- 使用 title 插槽来自定义标题 -->
              <template #title>
                <span class="custom-title">配送服务</span>
              </template>
              <template #default>
                <span class="custom-value">快递 免邮</span>
              </template>
            </van-cell>
            <van-field v-model="text" label="订单备注" placeholder="无备注" input-align="right" />
        </div>
      </div>
      <!-- 支付方式 -->
      <div class="payload">
        <van-cell>
              <!-- 使用 title 插槽来自定义标题 -->
              <template #title>
                <span class="custom-title">支付方式</span>
              </template>
              <template #default>
                <div class="checkBox">
                  <van-radio-group v-model="payLoad">
                    <van-radio name="1">在线支付</van-radio>
                    <van-radio name="2">货到付款</van-radio>
                  </van-radio-group>
                </div>
                <div class="checkBox" v-if="payLoad==='1'">
                  <van-radio-group v-model="radio">
                    <van-radio name="1">支付宝付</van-radio>
                    <van-radio name="2">微信支付</van-radio>
                  </van-radio-group>
                </div>
              </template>
            </van-cell>
      </div>
    </div>
    <easyPopup :address-info="addressInfo" :addressShow="addressShow" :newAddss="newAddss" :searchResult="searchResult" @closePopup="closePopup" @save="onSave" @delete="onDelete" />
    <van-submit-bar :price="price" @submit="onSubmit" button-text="提交订单" safe-area-inset-bottom	 />

  </div>
</template>

<script>
import easyPopup from '@/components/easy-popup.vue'
import {postGoodsList} from '@/api/pay'
import { areaList } from '@vant/area-data';
import { getAddress,delAddress,addAddress,updateAddress } from '@/api/contact'
export default {
    components:{easyPopup},
    name:'easy-Place',
    data() {
      return {
        payLoad:'1',
        radio: '1',
        text:'',
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
      async onSubmit() {
        if(this.checkList.length===1) {
          let config = {
            goods:[],
            addressId:this.checkList[0].id,
            deliveryTimeType:1,
            payType:this.payLoad*1,
            payChannel:this.payLoad==='1'?this.radio*1:'',
            buyerMessage:this.text
          }
          
          this.$store.state.goods.goodsList.forEach(item=>{
            item.specs.forEach(goods=>{
              config.goods.push(
                {
                  skuId:goods.skuId,
                  count:goods.count
                }
              )
            })
          })
          const res = await postGoodsList(config)
          this.$router.push(`/pay?orderId=${res.result.id}`)
        } else {
          this.$toast('请选择收货地址')
        }
      },
      goBack() {
        this.$store.commit('goods/setGoodsList',[])
        this.$router.go(-1)
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
    },
    computed:{
      price() {
      let num = 0
      this.$store.state.goods.goodsList.forEach(item => {
        num = num+item.specs[0].price/100*item.specs[0].count*100
        // console.log(item);
      })
      return num
    }
    }
}
</script>

<style lang="less" scoped>
.van-radio{
  margin: 10px 0;
  font-size: 16px;
}
.checkBox{
  float: right;
}
.custom-value {
  color:#000;

}
.goodsItem{
  background-color: #fff;
  margin-top: 10px;
}
.payload{
  margin-top: 10px;
  margin-bottom: 55px;
}
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