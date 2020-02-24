import axios from '@/libs/api.request'
import serverPort from '@/libs/serverPort.js'
const url = serverPort
// 登录
export function login (data) {
    return axios.request({
        url: url + '/account/login',
        method: 'post',
        data
    })
}