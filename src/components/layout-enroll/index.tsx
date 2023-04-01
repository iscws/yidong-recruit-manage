import React, { useCallback } from 'react';
import type { FC, ReactNode } from 'react';
import { columns, searchType, userEnrollType } from '@/type';
import { Button, Form, Input, Table } from 'antd';
import { useNavigate } from 'react-router-dom';
import { EnrollWrapper } from './style';
import { getSearchData } from '@/service/api';

interface LayoutEnrollProps {
  children?: ReactNode;
  infoData: userEnrollType[] | undefined;
  direction: number;
  reflashData: () => void;
}

const LayoutEnroll: FC<LayoutEnrollProps> = ({ infoData, reflashData }) => {
  const navigate = useNavigate();
  // 进入详情页
  const toUserDetail = useCallback((record: userEnrollType) => {
    navigate(`/detail/${record.id}`);
  }, []);
  const searchFinish = (value: searchType) => {
    getSearchData(value).then((res) => {
      console.log(res);
    });
  };
  return (
    <EnrollWrapper>
      <div className="area">
        <div className="search">
          <Form className="search-form" onFinish={searchFinish}>
            <Form.Item
              name="username"
              rules={[{ required: true, message: '请至少输入一个字' }]}
            >
              <Input placeholder="请输入姓名"></Input>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="submit-btn">
                搜索
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className="btn">
          <Button onClick={reflashData}>刷新数据</Button>
        </div>
      </div>
      <Table
        columns={columns}
        dataSource={infoData}
        rowKey="id"
        onRow={(record) => {
          return {
            onDoubleClick: () => {
              console.log('record:', record);

              toUserDetail(record);
            }
          };
        }}
      />
    </EnrollWrapper>
  );
};

export default LayoutEnroll;
