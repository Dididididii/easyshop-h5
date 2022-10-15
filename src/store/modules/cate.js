export default {
    namespaced:true,
    state:{
        cateList:[],
        list:'1'
    },
    mutations: {
        setCateList(state,payload) {
            payload.forEach(item => {
                if(item.name === '首页'){
                    return 
                } else {
                    state.cateList.push(item)
                }
            })
            // state.cateList = payload
        }
    },
    actions: {
    },
}