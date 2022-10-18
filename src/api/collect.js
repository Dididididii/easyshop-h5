import request from "@/utils/request"

/**
 * 获取收藏
 */
export const getCollect = (config) => {
    return request('/member/collect','get',{...config})
}

/**
 * 添加收藏
 */
export const addCollect = (config) =>{
    return request('/member/collect','post',{...config})
}

/**
 * 取消收藏
 */
export const delCollect = (config) =>{
    return request('/member/collect/batch','delete',{...config})
}