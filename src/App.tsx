import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './router';
import NavBar from '@/components/NavBar';

import { ConfigProvider } from 'zarm';

function App() {
  return (
    <Router>
      <ConfigProvider primaryColor={'#007fff'}>
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={<route.component />} />
          ))}
        </Routes>
      </ConfigProvider>
      <NavBar visible={true} />
    </Router>
  );
}

export default App;
