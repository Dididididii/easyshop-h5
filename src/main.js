import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Search,Tab, Tabs,Swipe, SwipeItem,Lazyload,Image as VanImage,Tabbar, TabbarItem,Icon,Sidebar, SidebarItem,NavBar,SwipeCell,Card,Button,SubmitBar,Checkbox,Empty  } from 'vant'

Vue.config.productionTip = false

Vue.use(Button)
Vue.use(Search)
Vue.use(Icon)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Lazyload)
Vue.use(VanImage)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Sidebar)
Vue.use(SidebarItem)
Vue.use(NavBar)
Vue.use(SwipeCell)
Vue.use(Card)
Vue.use(SubmitBar)
Vue.use(Checkbox)
Vue.use(Empty)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
