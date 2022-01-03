import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import { ConfigProvider } from 'zarm';
import 'lib-flexible/flexible';
import './index.css';

import routes from './router';
import NavBar from '@/components/NavBar';

function getAuthRoute(route: any) {
  const token = localStorage.getItem('token');
  if (!token && route.auth) {
    return <Navigate to="/login" />;
  }

  return <route.component />;
}

function App() {
  const pathname: string = useLocation().pathname;
  const showTabBar = ['/', '/data', '/user'];
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    setShowNav(showTabBar.includes(pathname));
  }, [pathname]);

  return (
    <>
      <ConfigProvider primaryColor={'#007fff'}>
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={getAuthRoute(route)} />
          ))}
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </ConfigProvider>
      <NavBar visible={showNav} />
    </>
  );
}

export default App;
