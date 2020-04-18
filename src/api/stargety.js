import {get,post} from './http'

export const getStarHotData = (params)=>{
    let url = '/strategyapi/nav';
    return get(url,params);
}

// 特色玩法数据获取
export const getFeatureData = (params)=>{
    let url = '/strategyapi/api/proxy/book/search';
    return get(url,params);
}

// 精选内容数据获取接口
export const getSelectData = (params)=>{
    let url = '/strategyapi/api/selection';
    return get(url,params)
}