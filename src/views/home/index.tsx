import React, { ReactNode, Suspense, useState } from 'react';
import { TeamOutlined, UserOutlined, FundOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { HomeWrapper } from './style';
import { getItem, substrNum } from '@/utils';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { MenuItemType } from '@/type';

// 定义菜单的item
const MenuItems: MenuItemType[] = [
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

export interface basicHomeProps {
  children?: ReactNode;
}
const Home: React.FC<basicHomeProps> = () => {
  const { Content, Sider } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  // 根据路径选择menu的展开项，利用split对url进行分组
  const location = useLocation().pathname.split('/');

  // 将点击item后的值传入组件当中
  function itemClick(value: any) {
    const path = value.keyPath[1] || 'edit';
    const direction = path === 'edit' ? '' : `/${substrNum(value.keyPath[0])}`;

    navigate(`/home/${path}${direction}`);
  }
  return (
    <HomeWrapper>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          className="sliderArea"
        >
          <div className="logo-area">
            <img src={require('@/assets/img/logo.png')} className="logo" />
          </div>

          <Menu
            theme="dark"
            defaultSelectedKeys={[
              location[3] !== undefined
                ? `${location[2]}-${location[3]}`
                : 'edit'
            ]}
            mode="inline"
            items={MenuItems}
            onClick={itemClick}
            defaultOpenKeys={[location[2]]}
          />
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
