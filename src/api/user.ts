import request from '@/utils/axios';

export const login = (data: Data) => {
  return request({
    url: '/user/login',
    method: 'post',
    data,
  });
};
