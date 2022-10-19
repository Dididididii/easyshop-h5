import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store/index'

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
  },
  {
    path:'/collect',
    component:()=>import('@/views/collect/index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  if(to.path === '/login') {
    if(store.state.user.profile.token) {
      router.push('/')
    } else {
      next()
    }
  }

  if(to.path === '/contact' || to.path === '/collect') {
    // 个人中心页
    if(store.state.user.profile.token) {
      next()
    } else {
      router.push(`/login?from=${to.path}`)
    }
  } else{
    next()
  }
  
})
export default router
