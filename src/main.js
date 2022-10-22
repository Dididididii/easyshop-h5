import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
import { Search,Tab, Tabs,Swipe, SwipeItem,Lazyload,Image as VanImage,Tabbar, TabbarItem,Icon,Sidebar, SidebarItem,NavBar,SwipeCell,Card,Button,SubmitBar,Checkbox,Empty,Popup,Cell, CellGroup,Field,AddressList,Toast,AddressEdit,GoodsAction, GoodsActionIcon, GoodsActionButton,Sku,List,PullRefresh,Form,RadioGroup, Radio,Stepper,CheckboxGroup,DropdownMenu, DropdownItem  } from 'vant'

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
Vue.use(Popup)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(Field)
Vue.use(AddressList)
Vue.use(Toast)
Vue.use(AddressEdit)
Vue.use(GoodsAction)
Vue.use(GoodsActionButton)
Vue.use(GoodsActionIcon)
Vue.use(Sku)
Vue.use(List)
Vue.use(PullRefresh)
Vue.use(Form)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Stepper)
Vue.use(CheckboxGroup)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
