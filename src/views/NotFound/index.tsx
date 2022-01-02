import React from 'react';
import { useNavigate } from 'react-router-dom';
import notFound from '@/assets/404_images/404.png';
import notFoundCloud from '@/assets/404_images/404_cloud.png';
import './index.less';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="wscn-http404-container">
      <div className="wscn-http404">
        <div className="pic-404">
          <img className="pic-404__parent" src={notFound} alt="404" />
          <img className="pic-404__child left" src={notFoundCloud} alt="404" />
          <img className="pic-404__child mid" src={notFoundCloud} alt="404" />
          <img className="pic-404__child right" src={notFoundCloud} alt="404" />
        </div>

        <div className="bullshit">
          <div className="bullshit__oops">OOPS!</div>
          <a href="" className="bullshit__return-home" onClick={() => navigate('/')}>
            返回首页
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
