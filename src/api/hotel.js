import {get,post} from './http'

export const getHotelData = ()=>{
    let url = '/hotelshow.json'
    return get(url,{});
}


export const getCities = ()=>{
    let url = '/cities.json'
    return get(url,{});
}

// 获取对应地点的酒店数据
export const getHotelDetailDate = (params)=>{
    let url = '/hotelapi/hotelcn/api/hotellist'
    return post(url,params);
}

// 模拟位置区域数据
export const getHotelAreaData = ()=>{
    let url = '/hotelarea.json'
    return get(url,{});
}
