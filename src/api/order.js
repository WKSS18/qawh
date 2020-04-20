import {get,post} from './http'

export const getAllOrderData = ()=>{
    let url  ='./orderlist.json';
    return get(url,{});
}