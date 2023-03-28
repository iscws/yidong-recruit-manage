import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';

const Home = lazy(() => import('@/views/home'));
const Login = lazy(() => import('@/views/login'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/Login" />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  }
];

export default routes;
