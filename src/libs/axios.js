import axios from 'axios'
import { Toast } from 'vant';
import router from '@/router/index.js'
import ls from './ls.js'
class HttpRequest {
    constructor (baseUrl = baseURL) {
        this.baseUrl = baseUrl
        this.queue = {}
    }
    getInsideConfig () {
        const config = {
            baseURL: this.baseUrl,
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'username': 'admin',
                // 'access_token': ls.fetch('token') || '',
                'Authorization': 'Basic ' + ls.fetchSession('new-token')
                // 'Authorization': 'Bearer 5f476c06-bfee-4121-b8b4-47aa598bde5a'
            }
        }
        return config
    }
    distroy (url) {
        delete this.queue[url]
    }
    interceptors (instance, url) {
    // 请求拦截
        instance.interceptors.request.use(config => {
            this.queue[url] = true
            return config
        }, error => {
            return Promise.reject(error)
        })
        // 响应拦截
        instance.interceptors.response.use(res => {
            this.distroy(url)
            const { data, status } = res
            if (res.data.code === 200 || res.data.code === 1007011) {
                return { data, status }
            } else {
                Toast.error({
                    duration: 5,
                    content: res.data.resultMsg
                })
            }
        }, error => {
            this.distroy(url)
            return Promise.reject(error)
        })
    }
    request (options) {
        const instance = axios.create()
        options = Object.assign(this.getInsideConfig(), options)
        this.interceptors(instance, options.url)
        return instance(options)
    }
}
export default HttpRequest
