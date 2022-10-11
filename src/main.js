import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Search,Tab, Tabs,Swipe, SwipeItem,Lazyload,Image as VanImage,Tabbar, TabbarItem } from 'vant'

Vue.config.productionTip = false

Vue.use(Search)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Lazyload)
Vue.use(VanImage)
Vue.use(Tabbar)
Vue.use(TabbarItem)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
