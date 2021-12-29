import axios from 'axios';
import { Toast } from 'zarm';
import { AxiosResponse } from 'axios';

// const MODE = import.meta.env.MODE; // vite自带的环境变量

const server = axios.create({
  baseURL: 'http://120.25.223.52:7001/api',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    Authorization: `${localStorage.getItem('token') || null}`,
    'Content-Type': 'application/json',
  },
});

server.interceptors.request.use((config) => {
  return config;
});

server.interceptors.response.use((response: AxiosResponse<ResData>) => {
  if (response.data.code !== 200) {
    Toast.show(response.data.msg);
  }

  return response;
});
export default server;
