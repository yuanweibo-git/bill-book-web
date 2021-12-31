import React from 'react';
import { TabBar } from 'zarm';
import { useNavigate } from 'react-router-dom';
import style from './index.module.less';

function NavBar({ visible }: Props) {
  const navigate = useNavigate();

  const changeTab = (path: Path): void => {
    console.log(path);
    navigate(path as string);
  };

  return (
    <TabBar visible={visible} className={style.tab} onChange={changeTab}>
      <TabBar.Item itemKey="/" title="账单" />
      <TabBar.Item itemKey="/data" title="统计" />
      <TabBar.Item itemKey="/user" title="我的" />
    </TabBar>
  );
}

export default NavBar;
