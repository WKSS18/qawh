import {get,post} from './http'

export const getPiaoData = (params)=>{
    let url = '/piaoapi/touch/detail.htm';
    return get(url,params);
}