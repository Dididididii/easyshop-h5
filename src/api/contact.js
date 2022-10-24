import request from '@/utils/request'

/**
 * 获取用户收货地址
 */
export const getAddress = () =>{
    return request('/member/address','get')
}

/**
 * 新增用户收货地址
 */
export const addAddress = (config) =>{
    return request('/member/address','post',{...config})
}

/**
 * 更新用户收货地址
 */
export const updateAddress = (id,config) => {
    return request(`/member/address/${id}`,'put',{...config})
}

/**
 * 删除用户收货地址
 */
 export const delAddress = (id) => {
    return request(`/member/address/${id}`,'DELETE')
}
