import React, { lazy } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';
import withAuth from '@/hoc/withRouter';

// 让home组件添加是否校验登录的hoc
const Home = withAuth(lazy(() => import('@/views/home')));
const Login = withAuth(lazy(() => import('@/views/login')));
const Detail = withAuth(lazy(() => import('@/views/detail')));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/home" />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/detail',
    element: <Detail />
  }
];

export default createBrowserRouter(routes);
