"use strict";(self["webpackChunkeasyshop_h5"]=self["webpackChunkeasyshop_h5"]||[]).push([[204],{9204:function(s,e,t){t.r(e),t.d(e,{default:function(){return p}});t(7658);var a=function(){var s=this,e=s._self._c;return e("div",{staticClass:"placeContext"},[e("van-nav-bar",{attrs:{title:"提交订单",placeholder:"",fixed:"","left-arrow":""},on:{"click-left":s.goBack}}),e("div",{staticClass:"box"},[e("div",{staticClass:"AddressList"},[e("van-address-list",{attrs:{list:s.checkList},on:{select:s.selectChange,edit:s.onEdit},scopedSlots:s._u([{key:"default",fn:function(){return[e("div",[s.open||s.checkList.length<=0?e("van-button",{staticClass:"Addressbtn",attrs:{type:"danger",block:"",size:"normal"},on:{click:s.onAdd}},[s._v("新增地址")]):s._e(),s.open?e("div",{staticClass:"btn",on:{click:s.guanAddress}},[s._v("取消选择")]):e("div",{staticClass:"btn",on:{click:s.updateAddress}},[s._v("选择其他地址")])],1)]},proxy:!0}]),model:{value:s.chosenAddressId,callback:function(e){s.chosenAddressId=e},expression:"chosenAddressId"}})],1),e("div",{staticClass:"goodsList"},s._l(s.$store.state.goods.goodsList,(function(t){return e("div",{key:t.specs.skuId,staticClass:"goodsItem"},[s._l(t.specs,(function(a){return e("van-card",{key:a.id,attrs:{num:a.count,price:a.price/100,desc:a.desc,title:t.name,thumb:a.picture},on:{click:function(e){return s.$router.push(`/goods?id=${t.id}`)}}})})),e("van-cell",{attrs:{"is-link":""},scopedSlots:s._u([{key:"title",fn:function(){return[e("span",{staticClass:"custom-title"},[s._v("配送服务")])]},proxy:!0},{key:"default",fn:function(){return[e("span",{staticClass:"custom-value"},[s._v("快递 免邮")])]},proxy:!0}],null,!0)}),e("van-field",{attrs:{label:"订单备注",placeholder:"无备注","input-align":"right"},model:{value:s.text,callback:function(e){s.text=e},expression:"text"}})],2)})),0),e("div",{staticClass:"payload"},[e("van-cell",{scopedSlots:s._u([{key:"title",fn:function(){return[e("span",{staticClass:"custom-title"},[s._v("支付方式")])]},proxy:!0},{key:"default",fn:function(){return[e("div",{staticClass:"checkBox"},[e("van-radio-group",{model:{value:s.payLoad,callback:function(e){s.payLoad=e},expression:"payLoad"}},[e("van-radio",{attrs:{name:"1"}},[s._v("在线支付")]),e("van-radio",{attrs:{name:"2"}},[s._v("货到付款")])],1)],1),"1"===s.payLoad?e("div",{staticClass:"checkBox"},[e("van-radio-group",{model:{value:s.radio,callback:function(e){s.radio=e},expression:"radio"}},[e("van-radio",{attrs:{name:"1"}},[s._v("支付宝付")]),e("van-radio",{attrs:{name:"2"}},[s._v("微信支付")])],1)],1):s._e()]},proxy:!0}])})],1)]),e("easyPopup",{attrs:{"address-info":s.addressInfo,addressShow:s.addressShow,newAddss:s.newAddss,searchResult:s.searchResult},on:{closePopup:s.closePopup,save:s.onSave,delete:s.onDelete}}),e("van-submit-bar",{attrs:{price:s.price,"button-text":"提交订单","safe-area-inset-bottom":""},on:{submit:s.onSubmit}})],1)},o=[],i=(t(541),t(1949)),d=t(596),r=t(2524),n=t(1198),c={components:{easyPopup:i.Z},name:"easy-Place",data(){return{payLoad:"1",radio:"1",text:"",addressShow:!1,chosenAddressId:"1",list:[],checkList:[],open:!1,areaList:r.H,addressInfo:{id:"0",name:"",tel:"",province:"",city:"",county:"",addressDetail:"",areaCode:"",postalCode:"",isDefault:!1,addressList:[]},newAddss:!1,searchResult:[]}},methods:{async onSubmit(){if(1===this.checkList.length){let s={goods:[],addressId:this.checkList[0].id,deliveryTimeType:1,payType:1*this.payLoad,payChannel:"1"===this.payLoad?1*this.radio:"",buyerMessage:this.text};this.$store.state.goods.goodsList.forEach((e=>{e.specs.forEach((e=>{s.goods.push({skuId:e.skuId,count:e.count})}))}));const e=await(0,d.HT)(s);this.$router.push(`/pay?orderId=${e.result.id}`)}else this.$toast("请选择收货地址")},goBack(){this.$store.commit("goods/setGoodsList",[]),this.$router.go(-1)},onAdd(){this.addressShow=!0,this.newAddss=!0,this.addressInfo={id:"0",name:"",tel:"",province:"",city:"",county:"",addressDetail:"",areaCode:"",postalCode:"",isDefault:!1}},guanAddress(){this.open=!1,this.checkList.length>0&&(this.checkList=[],this.checkList.push(this.list[0]))},updateAddress(){this.open=!0,this.checkList=this.list},selectChange(s){this.checkList=[],this.checkList.push(s),this.open&&(this.open=!1)},async getUserAddress(){this.list=[];const{result:s}=await(0,n.Kn)();s.forEach((s=>{this.list.unshift({id:s.id,name:s.receiver,tel:s.contact,address:s.provinceCode+s.cityCode+s.countyCode+s.address,isDefault:!1})})),this.list=this.list.reverse(),this.addressList=s.reverse(),this.list.length>0&&(this.chosenAddressId=this.list[0].id,this.checkList.push(this.list[0]))},closePopup(s){this.addressShow=s},onEdit(s,e){this.addressShow=!0,this.newAddss=!1;const t=this.addressList[e];this.addressId=t.id,this.addressInfo={id:t.id,name:t.receiver,tel:t.contact,province:t.provinceCode,city:t.cityCode,county:t.countyCode,addressDetail:t.address,areaCode:"110100",postalCode:t.postalCode,isDefault:0===t.isDefault}},async onSave(s){const e={receiver:s.name,contact:s.tel,provinceCode:s.province,cityCode:s.city,countyCode:s.county,address:s.addressDetail,postalCode:s.postalCode,addressTags:"家",isDefault:s.isDefault?0:1};if(this.newAddss)try{await(0,n.y$)(e),this.$toast("添加地址成功")}catch(t){this.$toast(t.response.data.message)}else try{await(0,n.y3)(this.addressId,e),this.$toast("地址修改成功")}catch(t){this.$toast(t.response.data.message)}this.getUserAddress(),this.addressShow=!1,this.addressInfo={id:"0",name:"",tel:"",province:"",city:"",county:"",addressDetail:"",areaCode:"",postalCode:"",isDefault:!1}},async onDelete(){try{await(0,n.Ho)(this.addressId),this.$toast("地址删除成功")}catch(s){this.$toast(s.response.data.message)}this.getUserAddress(),this.checkList=[],this.addressShow=!1,this.addressInfo={id:"0",name:"",tel:"",province:"",city:"",county:"",addressDetail:"",areaCode:"",postalCode:"",isDefault:!1}}},created(){this.getUserAddress(),console.log(this.$store.state.goods.goodsList)},computed:{price(){let s=0;return this.$store.state.goods.goodsList.forEach((e=>{s+=e.specs[0].price/100*e.specs[0].count*100})),s}}},l=c,h=t(1001),u=(0,h.Z)(l,a,o,!1,null,"ecbd0fc6",null),p=u.exports},596:function(s,e,t){t.d(e,{HT:function(){return o},Zl:function(){return n},co:function(){return i},qH:function(){return d},r2:function(){return c},y:function(){return r}});var a=t(435);const o=s=>(0,a.Z)("/member/order","post",{...s}),i=s=>(0,a.Z)(`/member/order/${s}`,"GET"),d=(s,e="不想要了")=>(0,a.Z)(`/member/order/${s}/cancel`,"PUT",{cancelReason:e}),r=s=>(0,a.Z)("/member/order","get",{...s}),n=s=>(0,a.Z)(`/member/order/${s}/logistics`,"get"),c=s=>(0,a.Z)(`/member/order/${s}/receipt`,"put")}}]);
//# sourceMappingURL=204.a472570e.js.map