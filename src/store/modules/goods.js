export default {
    namespaced:true,
    state:{
        goodsList:[],
    },
    mutations: {
        setGoodsList(state,payload) {
            state.goodsList = []
            state.goodsList.push(payload)
        }
    },
    actions: {
    },
}