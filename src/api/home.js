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
 export const getBanner = (distributionSite = 1) => {
    return request('/home/banner','get',{distributionSite})
}

/**
 * 获取好物推荐
 */
export const getSimple = () => {
    return request('/home/new/simple','get')
}

/**
 * 获取推荐商品
 */
export const getUserLike = (config) => {
    return request('/home/goods/guessLike','get', {...config})
}

/**
 * 获取爆款推荐
 */
export const getInVogue = () => {
    return request('/home/inVogue','get')
}