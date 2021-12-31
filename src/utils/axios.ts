import axios from 'axios';
import { Toast } from 'zarm';
import { AxiosResponse } from 'axios';

// const MODE = import.meta.env.MODE; // vite自带的环境变量

const server = axios.create({
  baseURL: '/api',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    Authorization: `${localStorage.getItem('token') || null}`,
    'Content-Type': 'application/json',
  },
});

server.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

server.interceptors.response.use(
  (response: AxiosResponse<ResData>) => {
    if (response.data.code !== 200) {
      Toast.show(response.data.msg);

      if (response.data.code === 401) {
        window.location.href = '/login';
      }
    }

    return response.data;
  },

  (error) => {
    return Promise.reject(error);
  }
);
export default server;
