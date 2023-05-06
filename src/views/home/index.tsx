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
        <Sider className="sliderArea" breakpoint="lg" collapsedWidth="0">
          <HomeMenu />
        </Sider>
        {/* 设定一个假的sider用于占位 */}
        <Sider
          className="sliderFake"
          breakpoint="lg"
          collapsedWidth="0"
        ></Sider>
        <Layout className="site-layout">
          <Content>
            <div style={{ margin: '20px' }}>
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
