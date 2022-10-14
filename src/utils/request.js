import axios from "axios";
import store from "@/store";
const instance = axios.create({
    baseURL:'https://apipc-xiaotuxian-front.itheima.net/',
    timeout:5000
})

instance.interceptors.request.use((config)=>{
    const {profile} = store.state.user
    if(profile){
        config.headers.Authorization = `Bearer ${profile.token}`
    }
    return config
},err=>{
    return Promise.reject(err)
})

instance.interceptors.response.use((response)=>{
    return response.data
},err=>{
    return Promise.reject(err)
})