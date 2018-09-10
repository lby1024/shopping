import home_data from '../../src/assets/data/home_data'

import axios from 'axios'
import urls from './urls'

export function get_home_data () {
    return new Promise((resolve, rejects)=>{
        setTimeout(()=>{
            resolve(home_data)
        }, 1000)
    })
}

function _get_data (method, url, data) {
    return new Promise((resolve, reject) => {
        axios({
            method: method,
            url: url,
            baseURL: urls.base,
            timeout: 5000,              // 如果请求超过 5 秒, 请求将会被终断
            params: data                // 传参
        })
        .then(res=>{
            if (res.status===200) resolve(res.data)
            else reject('服务器返回了错误数据')
        })
        .catch(err=>{
            console.log('链接服务器失败', err)
            alert('链接服务器失败')
        })
    })
}
// @ 1 : 获取商品详情
export function get_detail_data (goodId, shopId) {
    let data = {goodId, shopId}
    let url = urls.detail
    return _get_data('get', url, data)
}
// @ 2 : 获取分类数据
export function get_category01 (shopId) {
    let data = {shopId}
    let url = urls.category
    return _get_data('get', url, data)
}
// @ 3 : 获取商品列表
export function get_goods (categoryId, categorySubId, page, shopId) {
    // ---> 3.1 : 如果小类id存在 ---> 获取小类
    if (categorySubId) return get_goods02(categoryId, categorySubId, page, shopId)
    // ---> 3.2 : 如果小类id不存在 ---> 获取全部
    else return get_goods01(categoryId, page, shopId)   
}

// ---> 3.1 : 获取某一大类商品 ---> 例如: 酒(全部)
function get_goods01 (categoryId, page, shopId) {
    let data = {categoryId, page, shopId}
    let url = urls.goods
    return _get_data('get', url, data)
}
// ---> 3.2 : 获取某一小类商品 ---> 例如: 酒(白酒) or 酒(红酒)
function get_goods02 (categoryId, categorySubId, page, shopId) {
    let data = {categoryId, page, shopId, categorySubId}
    let url = urls.goods
    return _get_data('get', url, data)
}