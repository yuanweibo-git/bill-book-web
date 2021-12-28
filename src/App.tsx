import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './router';

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
    </Router>
  );
}

export default App;
