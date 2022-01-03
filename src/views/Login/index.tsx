import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { Cell, Input, Button, Toast, Loading } from 'zarm';
import CustomIcon from '@/components/CustomIcon';
import style from './style.module.less';
import Captcha from 'react-captcha-code';

import { register, login } from '@/api/user';

const Login = () => {
  const [username, setUsername] = useState<InputValue>('');
  const [password, setPassword] = useState<InputValue>('');
  const [verify, setVerify] = useState<InputValue>('');
  const [captch, setCaptch] = useState<InputValue>('');
  const [type, setType] = useState<InputValue>('login');

  const navigate = useNavigate();

  // 切换验证码
  const handleCaptch = useCallback((captch) => {
    setCaptch(captch);
  }, []);

  // 提交注册
  const onRegisterSubmit = async () => {
    if (!username || !password || !verify) {
      Toast.show('请填写完整');
      return;
    }

    if (verify !== captch) {
      Toast.show('验证码错误');
      return;
    }

    try {
      Loading.show();
      const params = {
        username: username as string,
        password: password as string,
      };

      const res = await register(params);

      Loading.hide();

      if (res.code === 200) {
        Toast.show('注册成功');

        navigate('/');
      }
    } catch (e) {
      console.error('error', e);
    }
  };

  // 登录
  const onLoginSubmit = async () => {
    if (!username || !password) {
      Toast.show('请填写完整');
      return;
    }

    try {
      const params = {
        username: username as string,
        password: password as string,
      };

      const res = await login(params);

      if (res.code === 200) {
        localStorage.setItem('token', res.data);
        navigate('/');
      }
    } catch (e) {
      console.error('error', e);
    }
  };

  return (
    <div className={style.auth}>
      <div className={style.head} />
      <div className={style.tab}>
        <span
          className={[type === 'login' ? [style.active] : ''].join(' ')}
          onClick={() => setType('login')}
        >
          登录
        </span>
        <span
          className={[type === 'register' ? [style.active] : ''].join(' ')}
          onClick={() => setType('register')}
        >
          注册
        </span>
      </div>

      <div className={style.form}>
        <Cell icon={<CustomIcon type="zhanghao" />}>
          <Input
            clearable
            type="text"
            onChange={(value: InputValue) => setUsername(value)}
            placeholder="请输入账号"
          />
        </Cell>
        <Cell icon={<CustomIcon type="mima" />}>
          <Input
            clearable
            type="password"
            onChange={(value: InputValue) => setPassword(value)}
            placeholder="请输入密码"
          />
        </Cell>
        {type === 'register' ? (
          <Cell icon={<CustomIcon type="mima" />}>
            <Input
              clearable
              type="text"
              onChange={(value: InputValue) => setVerify(value)}
              placeholder="请输入验证码"
            />
            <Captcha onChange={handleCaptch} charNum={4} />
          </Cell>
        ) : null}
      </div>

      <div className={style.operation}>
        {type === 'register' ? (
          <Button block onClick={onRegisterSubmit} theme="primary">
            注册
          </Button>
        ) : (
          <Button block onClick={onLoginSubmit} theme="primary">
            登录
          </Button>
        )}
      </div>
    </div>
  );
};

export default Login;
