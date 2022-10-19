import request from '@/utils/request'

/**
 * 获取购物车
 */
export const getCart = () =>{
    return request('/member/cart/mutli','get')
}

/**
 * 加入购物车
 */
export const addCart =(config) => {
    return request('/member/cart','post',{...config})
}

/**
 * 删除购物车商品
 */
export const delCart = (config) =>{
    return request('/member/cart','DELETE',{...config})
}

/**
 * 修改购物车商品
 */
export const updatCart = (config) =>{
    return request(`/member/cart/${config.id}`,'put',{ count:config.count })
}