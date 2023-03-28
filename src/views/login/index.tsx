import React from 'react';
import type { FC, ReactNode } from 'react';
import { login } from '@/service/api';
import styled from 'styled-components';
import { Button, Checkbox, Form, Input, message } from 'antd';

interface LoginProps {
  children?: ReactNode;
}

// username: 123
// pwd:123

// 样式处理
const LoginWraaper = styled['div']`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  .container {
    padding: 30px 40px 0;
    background-color: #ffff;
    box-shadow: 0 0 8px 1px #eeeeee;
    border-radius: 10px;
    .title {
      text-align: center;
      padding-bottom: 20px;
      font-size: 20px;
    }
  }
`;

const Login: FC<LoginProps> = () => {
  const onFinish = (values: any) => {
    login(values).then((res) => {
      const { message: mes, data, code } = res;
      console.log(res);

      if (code === 200) {
        message.success('登录成功');
        window.localStorage.setItem('token', data);
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
        <div className="title">易动招新后台管理</div>
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

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>记住我</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </LoginWraaper>
  );
};

export default Login;
