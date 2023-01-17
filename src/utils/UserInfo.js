import Cookies from "js-cookie";

// 保存登录用户信息
const userInfoKey = 'User-Info'

export function getUserInfo() {
    var userInfo = Cookies.get(userInfoKey)
    if (userInfo == null || userInfo == undefined) {
        return userInfo
    }

    return JSON.parse(userInfo)
}

export function setUserInfo(userInfo) {
    var stringUserInfo = JSON.stringify(userInfo)

    Cookies.set(userInfoKey, stringUserInfo, { expires: 7 })
}

export function removeUserInfo() {
    Cookies.remove(userInfoKey)
}