"use strict";(self["webpackChunkeasyshop_h5"]=self["webpackChunkeasyshop_h5"]||[]).push([[239],{6239:function(t,e,c){c.r(e),c.d(e,{default:function(){return u}});c(7658);var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"collectContext"},[e("van-nav-bar",{attrs:{fixed:"",placeholder:"",title:"收藏","left-arrow":""},on:{"click-left":function(e){return t.$router.go(-1)}}}),e("div",{staticClass:"collectBox"},t._l(t.collectList,(function(c){return e("van-swipe-cell",{key:c.id,scopedSlots:t._u([{key:"right",fn:function(){return[e("van-button",{staticClass:"delete-button",attrs:{square:"",text:"删除",type:"danger"},on:{click:function(e){return t.delCollects(c.id)}}})]},proxy:!0}],null,!0)},[e("van-card",{staticClass:"goods-card",attrs:{price:c.price,desc:c.name,thumb:c.picture},on:{click:function(e){return t.$router.push(`/goods?id=${c.id}`)}}})],1)})),1)],1)},l=[],n=c(938),o={name:"easy-Collect",data(){return{collectList:[]}},methods:{async getCollects(){const t=await(0,n.KP)({collectType:1});this.collectList=t.result.items},async delCollects(t){try{await(0,n.cS)({ids:[`${t}`],type:1}),this.$toast("取消收藏成功"),this.getCollects()}catch(e){this.$toast(e.response.data.message)}}},created(){this.getCollects()}},r=o,a=c(1001),i=(0,a.Z)(r,s,l,!1,null,"1926c70a",null),u=i.exports},938:function(t,e,c){c.d(e,{KP:function(){return l},_Y:function(){return n},cS:function(){return o}});var s=c(435);const l=t=>(0,s.Z)("/member/collect","get",{...t}),n=t=>(0,s.Z)("/member/collect","post",{...t}),o=t=>(0,s.Z)("/member/collect/batch","delete",{...t})}}]);
//# sourceMappingURL=239.951a50e2.js.map