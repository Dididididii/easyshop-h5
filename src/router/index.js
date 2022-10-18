import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    component:()=> import('@/views/Layout.vue'),
    children:[
      {
        path:'/',
        component:()=>import('@/views/home/index.vue')
      },
      {
        path:'category',
        component:()=>import('@/views/catelist/index.vue')
      },
      {
        path:'cart',
        component:()=>import('@/views/cart/index.vue')
      },
      {
        path:'contact',
        component:()=>import('@/views/contact/index.vue')
      },
    ]
  },
  {
    path:'/goods',
    component:()=>import('@/views/goods/index.vue')
  },
  {
    path:'/search',
    component:()=>import('@/views/search/index.vue')
  },
  {
    path:'/login',
    component:()=>import('@/views/login/index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
