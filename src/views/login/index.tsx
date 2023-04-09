import React from 'react';
import type { FC, ReactNode } from 'react';
import { login } from '@/service/api';
import { Button, Form, Input, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { LoginProps } from '@/type';
import { LoginWraaper } from './style';

interface IProps {
  children?: ReactNode;
}

// username: 123
// pwd:123

const Login: FC<IProps> = () => {
  const navigate = useNavigate();
  const onFinish = (values: LoginProps) => {
    login(values).then((res) => {
      const { message: mes, data, code } = res;
      console.log(res);

      if (code === 200) {
        message.success('登录成功');
        window.localStorage.setItem('token', data);
        window.localStorage.setItem('username', values.username);
        window.localStorage.setItem('password', values.password);

        navigate('/home');
      } else {
        message.error(mes);
      }
    });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <LoginWraaper>
      <div className="container">
        <div className="title">
          <img src={require('@/assets/img/logo.png')}></img>
        </div>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="账号"
            name="username"
            rules={[{ required: true, message: '请填写账号 ！' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: '请填写密码 ！' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit" style={{ width: '100px' }}>
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className="bgc">
        <img src={require('@/assets/img/bgc.jpg')} alt="" />
      </div>
    </LoginWraaper>
  );
};

export default Login;
