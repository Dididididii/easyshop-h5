export default {
    namespaced:true,
    state: {
        profile:{}
    },
    mutations: {
        setUserInfo(state,payload) {
            state.profile = payload
        }
    },
    actions: {
    },
}