import React from 'react';
import type { FC, ReactNode } from 'react';
import { getItem, substrNum } from '@/utils';
import {
  TeamOutlined,
  UserOutlined,
  FundOutlined,
  LogoutOutlined,
  ExclamationCircleFilled
} from '@ant-design/icons';
import { MenuItemType } from '@/type';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, message, Modal } from 'antd';

interface IProps {
  children?: ReactNode;
}

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
  getItem('修改面试', 'edit', <FundOutlined />, [
    getItem('前端', 'edit-1'),
    getItem('后端', 'edit-2')
  ]),

  getItem('退出登录', 'quit', <LogoutOutlined />)
];

const HomeMenu: FC<IProps> = () => {
  const navigate = useNavigate();
  // 根据路径选择menu的展开项，利用split对url进行分组
  const location = useLocation().pathname.split('/');

  // 将点击item后的值传入组件当中
  function itemClick(value: any) {
    if (value.keyPath[0] === 'quit') {
      console.log('退出登录');
      Modal.confirm({
        title: '确定要退出登录吗',
        icon: <ExclamationCircleFilled />,
        content: '退出后需要重新输入账号密码',
        cancelText: '取消',
        okText: '确认',
        onOk() {
          localStorage.clear();
          navigate('/Login');
          message.success('退出登录成功');
        },
        onCancel() {
          console.log('Cancel');
        }
      });
      return;
    }
    const path = value.keyPath[1];
    const direction = `/${substrNum(value.keyPath[0])}`;

    navigate(`/home/${path}${direction}`);
  }
  return (
    <Menu
      theme="dark"
      mode="inline"
      items={MenuItems}
      onClick={itemClick}
      selectedKeys={[`${location[2]}-${location[3]}`]}
      defaultOpenKeys={[location[2] === undefined ? 'enroll' : location[2]]}
    />
  );
};

export default HomeMenu;
