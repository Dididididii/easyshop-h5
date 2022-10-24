export default {
    namespaced:true,
    state:{
        OrderList:{},
    },
    mutations: {
        setOrderList(state,payload) {
            state.OrderList = {}
            state.OrderList = payload
        }
    },
    actions: {
    },
}