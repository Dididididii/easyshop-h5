"use strict";(self["webpackChunkeasyshop_h5"]=self["webpackChunkeasyshop_h5"]||[]).push([[300],{4300:function(s,t,e){e.r(t),e.d(t,{default:function(){return h}});var a=function(){var s=this,t=s._self._c;return s.$store.state.user.profile.token?t("div",{staticClass:"contactContext"},[t("van-nav-bar",{attrs:{title:"个人中心",placeholder:"",fixed:""}}),t("div",{staticClass:"userInfo"},[t("van-image",{staticClass:"userPhoto",attrs:{fit:"cover",round:"",src:s.$store.state.user.profile.avatar}}),t("div",{staticClass:"userBox"},[t("div",{staticClass:"userName"},[t("p",{staticClass:"name"},[s._v(s._s(s.$store.state.user.profile.nickname?s.$store.state.user.profile.nickname:"无忧商城用户"))]),t("p",{staticClass:"number"},[s._v("账号："+s._s(s.$store.state.user.profile.account))])]),t("van-icon",{staticClass:"set",attrs:{name:"setting-o"},on:{click:function(t){s.setShow=!0}}})],1)],1),t("div",{staticClass:"userCard"},s._l(s.cartList,(function(e){return t("div",{key:e.title,staticClass:"cartItem",on:{click:function(t){return s.toCollect(e.title)}}},[t("van-icon",{staticClass:"icon",attrs:{name:e.name}}),t("p",{staticClass:"title"},[s._v(s._s(e.title))])],1)})),0),t("van-popup",{style:{height:"100%",width:"100%"},attrs:{position:"right",closeable:""},model:{value:s.setShow,callback:function(t){s.setShow=t},expression:"setShow"}},[t("div",{staticClass:"setBox"},[t("div",{staticClass:"userInfo",on:{click:function(t){return s.updateUser(1)}}},[t("van-image",{staticClass:"setPhoto",attrs:{fit:"cover",round:"",src:s.$store.state.user.profile.avatar}}),t("div",{staticClass:"userBox"},[t("div",{staticClass:"userName"},[t("p",{staticClass:"name"},[s._v(s._s(s.$store.state.user.profile.nickname?s.$store.state.user.profile.nickname:"无忧商城用户"))]),t("p",{staticClass:"number"},[s._v("账号："+s._s(s.$store.state.user.profile.account))])]),t("van-icon",{staticClass:"right",attrs:{name:"arrow"}})],1)],1),t("div",{staticClass:"address",on:{click:function(t){return s.updateUser(2)}}},[t("div",{staticClass:"userInfo"},[t("div",{staticClass:"userBox"},[t("div",{staticClass:"userName"},[t("p",{staticClass:"name"},[s._v("我的收货地址")])]),t("van-icon",{staticClass:"right",attrs:{name:"arrow"}})],1)])]),t("div",{staticClass:"security",on:{click:function(t){return s.updateUser(3)}}},[t("div",{staticClass:"userInfo"},[t("div",{staticClass:"userBox"},[t("div",{staticClass:"userName"},[t("p",{staticClass:"name"},[s._v("账号与安全")])]),t("van-icon",{staticClass:"right",attrs:{name:"arrow"}})],1)])])]),t("van-button",{attrs:{type:"default",block:"",size:"small"},on:{click:s.toBack}},[s._v("退出登录")]),t("van-popup",{style:{height:"100%",width:"100%"},attrs:{position:"right"},model:{value:s.updateShow,callback:function(t){s.updateShow=t},expression:"updateShow"}},[t("van-nav-bar",{attrs:{title:s.title,"left-arrow":""},on:{"click-left":function(t){s.updateShow=!1}}}),t("div",{staticClass:"updateBox"},[1===s.active?t("div",{staticClass:"upateUser"},[t("div",{staticClass:"photoBox"},[t("van-image",{staticClass:"photo",attrs:{fit:"cover","lazy-load":"",round:"",src:"https://img01.yzcdn.cn/vant/cat.jpeg"}})],1),t("van-cell",{attrs:{"is-link":"",title:"名字"},on:{click:function(t){s.show=!0}}}),t("van-popup",{style:{height:"100%",width:"100%"},attrs:{position:"right"},model:{value:s.show,callback:function(t){s.show=t},expression:"show"}},[t("div",[t("van-nav-bar",{attrs:{title:"标题","left-arrow":""},on:{"click-left":function(t){s.show=!1}}}),t("div",[t("van-cell-group",[t("van-field",{attrs:{placeholder:"请输入用户名"},model:{value:s.value,callback:function(t){s.value=t},expression:"value"}}),t("van-button",{attrs:{type:"default",block:"",size:"small"}},[s._v("修改")])],1)],1)],1)])],1):2===s.active?t("div",{staticClass:"updateAddress"},[t("van-address-list",{attrs:{list:s.list,"default-tag-text":"默认"},on:{add:s.onAdd,edit:s.onEdit,select:s.selectCheck},model:{value:s.chosenAddressId,callback:function(t){s.chosenAddressId=t},expression:"chosenAddressId"}}),t("easyPopup",{attrs:{"address-info":s.addressInfo,addressShow:s.addressShow,newAddss:s.newAddss,searchResult:s.searchResult},on:{save:s.onSave,delete:s.onDelete,closePopup:t=>s.addressShow=t}})],1):s._e()])],1)],1)],1):s._e()},i=[],o=(e(541),e(7658),e(2524)),r=e(1949),d=e(1198),n={components:{easyPopup:r.Z},name:"easy-Contact",data(){return{cartList:[{title:"收藏",name:"star-o"},{title:"订阅",name:"sign"},{title:"足迹",name:"underway-o"},{title:"待付款",name:"idcard"},{title:"待发货",name:"send-gift-o"},{title:"待收货",name:"logistics"},{title:"待评价",name:"chat-o"},{title:"退款/售后",name:"after-sale"}],addressInfo:{id:"0",name:"",tel:"",province:"",city:"",county:"",addressDetail:"",areaCode:"",postalCode:"",isDefault:!1},active:0,addressList:[],title:"",setShow:!1,updateShow:!1,newAddss:!1,show:!1,value:"",chosenAddressId:"1",addressShow:!1,areaList:o.H,searchResult:[],list:[],addressId:""}},methods:{selectCheck(s,t){this.list.forEach((s=>{s.isDefault=!1})),this.list[t].isDefault=!0,this.list.splice(t,1),this.list.unshift(s)},async getUserAddress(){this.list=[];const{result:s}=await(0,d.Kn)();s.forEach((s=>{this.list.unshift({id:s.id,name:s.receiver,tel:s.contact,address:s.provinceCode+s.cityCode+s.countyCode+s.address,isDefault:!1})})),this.addressList=s.reverse(),this.list.length>0&&(this.chosenAddressId=this.list[0].id,this.list[0].isDefault=!0)},updateUser(s){this.updateShow=!0,this.active=s,1===s?this.title="修改用户资料":2===s?(this.title="我的收货地址",this.getUserAddress()):this.title="账号安全"},toCollect(s){"收藏"===s?this.$router.push("/collect"):"待付款"===s?this.$router.push("/payment"):"待发货"===s?this.$router.push("/sendorder"):"待收货"===s&&this.$router.push("/forgoods")},toBack(){this.$store.commit("user/setUserInfo",{}),this.$toast("退出成功"),this.$router.push("/")},onAdd(){this.addressShow=!0,this.newAddss=!0,this.addressInfo={id:"0",name:"",tel:"",province:"",city:"",county:"",addressDetail:"",areaCode:"",postalCode:"",isDefault:!1}},onEdit(s,t){this.addressShow=!0,this.newAddss=!1;const e=this.addressList[t];this.addressId=e.id,this.addressInfo={id:e.id,name:e.receiver,tel:e.contact,province:e.provinceCode,city:e.cityCode,county:e.countyCode,addressDetail:e.address,areaCode:"110100",postalCode:e.postalCode,isDefault:0===e.isDefault}},async onSave(s){console.log(s);const t={receiver:s.name,contact:s.tel,provinceCode:s.province,cityCode:s.city,countyCode:s.county,address:s.addressDetail,postalCode:s.postalCode,addressTags:"家",isDefault:s.isDefault?0:1};if(this.newAddss)try{await(0,d.y$)(t),this.$toast("添加地址成功")}catch(e){this.$toast(e.response.data.message)}else try{await(0,d.y3)(this.addressId,t),this.$toast("地址修改成功")}catch(e){this.$toast(e.response.data.message)}this.getUserAddress(),this.addressShow=!1,this.addressInfo={id:"0",name:"",tel:"",province:"",city:"",county:"",addressDetail:"",areaCode:"",postalCode:"",isDefault:!1}},async onDelete(){try{await(0,d.Ho)(this.addressId),this.$toast("地址删除成功")}catch(s){this.$toast(s.response.data.message)}this.getUserAddress(),this.addressShow=!1,this.addressInfo={id:"0",name:"",tel:"",province:"",city:"",county:"",addressDetail:"",areaCode:"",postalCode:"",isDefault:!1}}}},l=n,c=e(1001),u=(0,c.Z)(l,a,i,!1,null,"29002e59",null),h=u.exports}}]);
//# sourceMappingURL=300.7047f3d3.js.map