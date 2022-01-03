import React, { useState } from 'react';
import { TabBar } from 'zarm';
import { useNavigate } from 'react-router-dom';
import style from './style.module.less';

import CustomIcon from '@/components/CustomIcon';

function NavBar({ visible }: Props) {
  const [active, setActive] = useState('/');
  const navigate = useNavigate();

  const changeTab = (path: Path): void => {
    setActive(path as string);
    navigate(path as string);
  };

  return (
    <TabBar visible={visible} className={style.tab} activeKey={active} onChange={changeTab}>
      <TabBar.Item itemKey="/" icon={<CustomIcon type="zhangdan" />} title="账单" />
      <TabBar.Item itemKey="/data" icon={<CustomIcon type="tongji" />} title="统计" />
      <TabBar.Item itemKey="/user" icon={<CustomIcon type="wode" />} title="我的" />
    </TabBar>
  );
}

export default NavBar;
