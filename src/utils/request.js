import axios from 'axios';

const server = axios.create({
    timeout:5000,
    withCredentials:true
})

//请求拦截器
server.interceptors.request.use((config)=>{
    if(config.method == 'get'){
        config.params = {...config.data};
    }
    
},(err)=>{
    return Promise.reject(err);
})

//响应拦截器
server.interceptors.response.use((res)=>{
    if(res.status==200){
        return res.data;
    }
},(err)=>{
    return Promise.reject(err);
})

export default server;