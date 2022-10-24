import request from "@/utils/request"

/**
 * 提交订单
 */
export const postGoodsList = (config) => {
    return request('/member/order','post',{...config})
}

/**
 * 获取订单详情
 */
export const getOrder = (id) =>{
    return request(`/member/order/${id}`,'GET')
}

/**
 * 取消订单
 */
export const detalOrder = (id, cancelReason='不想要了') =>{
    return request(`/member/order/${id}/cancel`,'PUT',{cancelReason})
}


/**
 * 获取我的订单
 */
 export const getMyOrder = (config) => {
    return request('/member/order','get',{...config})
}

/**
 * 查看物流
 */
export const getLogistics = (id) => {
    return request(`/member/order/${id}/logistics`,'get')
}

/**
 * 确认收货
 */
export const putReceipt = (id) => {
    return request(`/member/order/${id}/receipt`,'put')
}