import request from "@/utils/request";

/**
 * 获取搜索关键词
 */
export const getSearchTips = (keyword) =>{
    return request('/search/tips','get',{ keyword })
}