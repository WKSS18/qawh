import {get,post} from './http'


// 请求首页功能列表数据接口
export const getIndexData = ()=>{
    let url = './index.json';
    return get(url,{});
}

// 请求今日特惠数据接口
export const getPreData = ()=>{
    let url = '/preference.json';
    return get(url,{})
}

// 请求热门度假数据接口
export const getHotData = ()=>{
    let url = '/hot.json';
    return get(url,{})
}