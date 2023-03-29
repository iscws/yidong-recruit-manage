import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import type { ComponentType } from 'react';
import { basicHomeProps } from '@/views/home';

// 让被hoc包裹的组件能够加上 checkAuthed 的属性
function withAuth<FieldType extends basicHomeProps>(
  Component: ComponentType<FieldType>
) {
  const WrappedComponent = (props: FieldType) => {
    const navigate = useNavigate();

    useEffect(() => {
      localStorage.getItem('token') == null && navigate('/login');
    }, [navigate]);

    return <Component {...props} />;
  };

  return WrappedComponent;
}

export default withAuth;
