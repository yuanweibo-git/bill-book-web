import React from 'react';
import { Button } from 'zarm';
import { login } from '@/api/user';

login({ username: 'admin', password: '123456' }).then((res) => {
  console.log(res);
});
export default function Index() {
  return (
    <div>
      Index
      <Button theme="primary">按钮</Button>
    </div>
  );
}
