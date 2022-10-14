export default {
    namespace:true,
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