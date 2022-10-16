import request from "@/utils/request";

/**
 * 获取商品详情
 */
export const getGoods = (id) =>{
    return request('/goods/app','get',{id})
}