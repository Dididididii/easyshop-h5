import request from "@/utils/request";

/**
 * 获取分类
 * @returns 
 */
export const getCateList = () =>{
    return request('/home/category/head','get')
}

/**
 * 获取轮播图
 */
 export const getBanner=(distributionSite=2)=>{
    return request('/home/banner','get',{distributionSite})
}

/**
 * 获取好物推荐
 */
export const getSimple=()=>{
    return request('/home/new/simple','get')
}