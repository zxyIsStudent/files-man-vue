import axios from 'axios';
import Message from '@/utils/Message';
import Storage from '@/utils/DeviceStorage';

import { ElLoading } from 'element-plus'



const service = axios.create({
    baseURL: 'http://192.168.1.11:8081/', //地址
});
service.interceptors.request.use(
    (config) => {
        config.headers["token"] = Storage.get('token')
        return config;
    },
    (error) => {
        Promise.reject(error);
    }
);

var loadinginstace
service.interceptors.request.use(config => {
    loadinginstace = ElLoading.service({ lock: true, text: '努力加载~' })
    return config
}, error => {
    loadinginstace.close();
    Message.error('网络不给力,请稍后再试');
    return Promise.reject(error)
})

service.interceptors.response.use(
    (response) => {
        if (response.headers !== "application/json") {
            loadinginstace.close();
            return response.data;
        } else {
            const res = response.data;
            if (res.code !== 200) {
                loadinginstace.close();
                Message.error(res.message);
                if (res.code === 401) {
                }
                return Promise.reject("error");
            } else {
                loadinginstace.close();
                return response.data;
            }
        }


    },
    (error) => {
        loadinginstace.close();
        Message.error('请求失败');
        return Promise.reject(error);
    }
);

export default service;