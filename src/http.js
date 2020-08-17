import axios from 'axios'
import BaseUrl from '../config.js'
const http = axios.create({
    baseURL: BaseUrl.ROOT
    // baseURL: 'https://api.qq.jsososo.com'
})
export default http;