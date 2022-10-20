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
      <div class="AddressList">
        <van-address-list
          @select="selectChange"
          v-if="chosenAddressId===selectId"
          :list="list"
          v-model="chosenAddressId"
        >
          <template #default>
            <div class="btn">选择其他地址</div>
          </template>
        </van-address-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'easy-Place',
    data() {
      return {
        chosenAddressId:'1',
        selectId:'1',
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
            name: '张三',
            tel: '13000000000',
            address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
            isDefault: true,
          },
          {
            id: '3',
            name: '张三',
            tel: '13000000000',
            address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
            isDefault: true,
          }
        ],
      }
    },
    methods:{
      selectChange(e){
        this.selectId = e.id
        // console.log(e);
      }
    }
}
</script>

<style lang="less" scoped>
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