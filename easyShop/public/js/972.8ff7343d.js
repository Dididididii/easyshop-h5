"use strict";(self["webpackChunkeasyshop_h5"]=self["webpackChunkeasyshop_h5"]||[]).push([[972],{4972:function(t,e,a){a.r(e),a.d(e,{default:function(){return l}});a(7658);var s=function(){var t=this,e=t._self._c;return t.cateList.length>0?e("div",{staticClass:"cateContext"},[e("nav",{staticClass:"navBar"},[e("van-search",{attrs:{"input-align":"center",placeholder:"请输入搜索关键词"},on:{click:function(e){return t.$router.push("/search")}},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),e("main",{staticClass:"context"},[e("van-sidebar",{model:{value:t.activeKey,callback:function(e){t.activeKey=e},expression:"activeKey"}},t._l(t.cateList,(function(t){return e("van-sidebar-item",{key:t.id,attrs:{title:t.name}})})),1),e("div",{staticClass:"cateBox"},[e("div",{staticClass:"cateList"},t._l(t.cateList[t.activeKey].children,(function(a){return e("div",{key:a.id,staticClass:"cateItem",attrs:{div:""}},[e("van-image",{staticClass:"cateImages",attrs:{fit:"contain",src:a.picture}}),e("p",{staticClass:"cateName"},[t._v(t._s(a.name))])],1)})),0)])],1)]):t._e()},n=[],i=a(2419),c={name:"easy-CateList",data(){return{activeKey:0,cateList:[],value:""}},methods:{async getCateLists(){const t=await(0,i.hN)();this.cateList=t.result}},created(){this.getCateLists()}},r=c,u=a(1001),o=(0,u.Z)(r,s,n,!1,null,"b9ad89a4",null),l=o.exports},2419:function(t,e,a){a.d(e,{Eg:function(){return i},ON:function(){return u},hN:function(){return n},qE:function(){return r},qN:function(){return c}});var s=a(435);const n=()=>(0,s.Z)("/home/category/head","get"),i=(t=1)=>(0,s.Z)("/home/banner","get",{distributionSite:t}),c=()=>(0,s.Z)("/home/new/simple","get"),r=t=>(0,s.Z)("/home/goods/guessLike","get",{...t}),u=()=>(0,s.Z)("/home/inVogue","get")}}]);
//# sourceMappingURL=972.8ff7343d.js.map