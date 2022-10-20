<template>
  <van-popup v-model="addressShow1" position="right" :style="{ height: '100%', width:'100%' }"  >
    <div>
        <van-nav-bar
            :title="`${newAddss?'添加':'修改'}`+'地址'"
            left-arrow
            @click-left="closePopup"
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
                @save="save"
                @delete="onDelete"
            />
        </div>
    </div>
  </van-popup>
</template>

<script>
import { areaList } from '@vant/area-data';

export default {
    name:'easy-Popup',
    props:{
        addressShow:{
            type:Boolean,
            default:false
        },
        newAddss:{
            type:Boolean,
            default:false
        },
        searchResult:{
            type:Array,
            default:()=>[]
        },
        addressInfo:{
            type:Object,
            default:()=>{
                return {
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
    },
    data() {
        return {
            addressShow1:false,
            areaList,
        }
    },
    methods:{
        closePopup() {
            this.addressShow1 = false
            this.$emit('closePopup',this.addressShow1)
        },
        save(e) {
            this.$emit('save',e)
        },
        onDelete() {
            this.$emit('delete')
        }
    },
    watch:{
        addressShow(newv){
            this.addressShow1 = newv
        },
    }
}
</script>

<style>

</style>