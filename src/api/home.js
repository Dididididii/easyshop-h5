import request from "@/utils/request";

export const getCateList = () =>{
    return request('/home/category/head','get')
}