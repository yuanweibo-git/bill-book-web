import request from '@/utils/axios';

export const login = (data: Login) => {
  return request({
    url: '/user/login',
    method: 'post',
    data,
  });
};

export const register = (data: Register) => {
  return request({
    url: '/user/register',
    method: 'post',
    data,
  });
};
