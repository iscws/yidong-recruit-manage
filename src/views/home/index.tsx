import React, { ReactNode, Suspense } from 'react';

import { Layout } from 'antd';
import { HomeWrapper } from './style';
import { Outlet } from 'react-router-dom';
import HomeMenu from '@/components/home-menu';

export interface basicHomeProps {
  children?: ReactNode;
}
const Home: React.FC<basicHomeProps> = () => {
  const { Content, Sider } = Layout;

  return (
    <HomeWrapper>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider className="sliderArea">
          <div className="logo-area">
            <img src={require('@/assets/img/logo.png')} className="logo" />
          </div>
          <HomeMenu />
        </Sider>
        <Layout className="site-layout">
          <Content>
            <div style={{ margin: '20px 20px 0 220px' }}>
              <Suspense fallback="loading">
                <Outlet />
              </Suspense>
            </div>
          </Content>
        </Layout>
      </Layout>
    </HomeWrapper>
  );
};

export default Home;
