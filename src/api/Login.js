import request from "@/utils/request";

/**
 * 登录-用户名/密码
 */
export const loginIsNum = (config) => {
    return request('/login','post',{...config})
}

/**
 * 注册-用户名/密码
 */
export const registerNum = (config) => {
    return request('/register','post',{...config})
}

/**
 * 注册-手机
 */
export const registerPhoto = (config) => {
    return request('/register/code/check','get',{...config})
}

/**
 * 登录-手机
 */
export const loginPhoto = (config) => {
    return request('/login/code','post',{...config})
}

/**
 * 获取注册验证码
 */
export const getCode = (config) => {
    return request('/code','get',{...config})
}

/**
 * 获取登录验证码
 */
 export const getLoginCode = (moblie) => {
    return request('/login/code','get',{moblie})
}