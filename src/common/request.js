import axios from 'axios'
import utils from './utils';

axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = '/api';


//POST传参序列化及request配置
axios.interceptors.request.use((config) => {
    if (utils.getStore('token')) {
        config.headers['token'] = utils.getStore('token') 
    }
//   config.headers['content-type'] = 'application/json';
  if (config.method === 'post') {
    // config.data = qs.stringify(config.data);
  }
  return config;
});

//返回状态判断(添加响应拦截器)
// axios.interceptors.response.use((res) => {
//   if (res.status != 200) {
//     return Promise.reject(res.data);
//   }
//   return res;
// }, (error) => {
//   return Promise.reject(error.response.data);
// });

export default axios;