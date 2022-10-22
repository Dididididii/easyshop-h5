import request from "@/utils/request";

/**
 * 获取搜索关键词
 */
export const getSearchTips = (keyword) =>{
    return request('/search/tips','get',{ keyword })
}

/**
 * 搜索商品
 */
export const searchGoods = (config) => {
    return request('/search/all','POST',{...config})
}