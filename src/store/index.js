import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import cate from './modules/cate'
import createPersistedstate from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user,
    cate
  },
  plugins:[
    createPersistedstate({
      key:'easy-shop-h5-store',
      paths:['user','cate']
    })
  ]
})
