import React, { lazy } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';
import withAuth from '@/hoc/withRouter';

// 让home组件添加是否校验登录的hoc
const Home = withAuth(lazy(() => import('@/views/home')));
const Login = withAuth(lazy(() => import('@/views/login')));
const Detail = withAuth(lazy(() => import('@/views/detail')));
const Edit = withAuth(lazy(() => import('@/components/layout-edit')));
const Enroll = withAuth(lazy(() => import('@/components/layout-enroll')));
const Interview = withAuth(lazy(() => import('@/components/layout-interview')));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/home" />
  },
  {
    path: '/home',
    element: <Home />,
    children: [
      {
        path: '/home',
        element: <Navigate to={'/home/enroll/1'} />
      },
      {
        path: '/home/edit',
        element: <Edit />
      },
      {
        path: '/home/enroll/:direction?',
        element: <Enroll />
      },
      {
        path: '/home/interview/:direction?',
        element: <Interview />
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/detail/:id?',
    element: <Detail />
  }
];

export default createBrowserRouter(routes);
