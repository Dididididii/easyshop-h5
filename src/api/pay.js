import request from "@/utils/request"

/**
 * 提交订单
 */
export const postGoodsList = (config) => {
    return request('/member/order','post',{...config})
}

/**
 * 支付
 */
export const postPay = (id) =>{
    return request('/pay/aliPay','GET',{orderId:id,redirect:'http://localhost:8080/'})
}