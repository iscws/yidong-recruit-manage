import React, { ReactNode, useState } from 'react';

import { TeamOutlined, UserOutlined, FundOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';

import LayoutData from '@/components/layout-data';
import { HomeWrapper } from './style';
import { getItem, substrNum } from '@/utils';
import type { infoDataType } from '@/type';

export interface basicHomeProps {
  children?: ReactNode;
}
export type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  getItem('报名情况', 'enroll', <UserOutlined />, [
    getItem('前端', 'enroll-1'),
    getItem('后端', 'enroll-2')
  ]),
  getItem('面试情况', 'interview', <TeamOutlined />, [
    getItem('前端', 'interview-1'),
    getItem('后端', 'interview-2')
  ]),
  getItem('修改面试', 'edit', <FundOutlined />)
];

const Home: React.FC<basicHomeProps> = () => {
  const { Content, Sider } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  const [innerData, setInnerData] = useState<infoDataType>({
    type: 'edit',
    direction: 0
  });

  // 将点击item后的值传入组件当中
  function itemClick(value: any) {
    const infoData = {
      type: value.keyPath[1] || 'edit',
      direction: substrNum(value.keyPath[0]) || 0
    };

    setInnerData(infoData);
  }
  return (
    <HomeWrapper>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
            top: 0,
            bottom: 0
          }}
        >
          <div className="logo-area">
            <img src={require('@/assets/img/logo.png')} className="logo" />
          </div>

          <Menu
            theme="dark"
            defaultSelectedKeys={['edit']}
            mode="inline"
            items={items}
            onClick={itemClick}
            defaultOpenKeys={['edit']}
          />
        </Sider>
        <Layout className="site-layout">
          <Content>
            <div style={{ marginLeft: 220, textAlign: 'center' }}>
              <LayoutData infoData={innerData} />
            </div>
          </Content>
        </Layout>
      </Layout>
    </HomeWrapper>
  );
};

export default Home;
