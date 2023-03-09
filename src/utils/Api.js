import request from './DataUtil';


export function getImgPages(params) {
    return request({
        url: "/files/page", //api
        method: "get",
        params
    });
}

export function uploads(data) {
    return request({
        url: "/files/uploads", //api
        method: "post",
        data
    });
}