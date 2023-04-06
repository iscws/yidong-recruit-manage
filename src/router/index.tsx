import React, { lazy, Suspense } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import type { ReactNode } from 'react';
import type { RouteObject } from 'react-router-dom';
import withAuth from '@/hoc/withRouter';
import { Skeleton } from 'antd';

// 让home组件添加是否校验登录的hoc
const Home = withAuth(lazy(() => import('@/views/home')));
const Login = withAuth(lazy(() => import('@/views/login')));
const Detail = withAuth(lazy(() => import('@/views/detail')));
const Edit = withAuth(lazy(() => import('@/components/layout-edit')));
const Enroll = withAuth(lazy(() => import('@/components/layout-enroll')));
const Interview = withAuth(lazy(() => import('@/components/layout-interview')));
const LazyLoad = (children: ReactNode) => {
  return (
    <Suspense fallback={<Skeleton active style={{ marginTop: '25px' }} />}>
      {children}
    </Suspense>
  );
};
const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/home" />
  },
  {
    path: '/home',
    element: LazyLoad(<Home />),
    children: [
      {
        path: '/home',
        element: <Navigate to={'/home/enroll/1'} />
      },
      {
        path: '/home/edit/:direction?',
        element: LazyLoad(<Edit />)
      },
      {
        path: '/home/enroll/:direction?',
        element: LazyLoad(<Enroll />)
      },
      {
        path: '/home/interview/:direction?',
        element: LazyLoad(<Interview />)
      }
    ]
  },
  {
    path: '/login',
    element: LazyLoad(<Login />)
  },
  {
    path: '/detail/:id?',
    element: LazyLoad(<Detail />)
  }
];

export default createBrowserRouter(routes);
