import React, { useCallback, memo, useState, useEffect } from 'react';
import type { FC, ReactNode } from 'react';
import { columns, searchType, userEnrollType } from '@/type';
import { Button, Form, Input, Table } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import { EnrollWrapper } from './style';
import { getEnrollData, getSearchData } from '@/service/api';

interface LayoutEnrollProps {
  children?: ReactNode;
}

const LayoutEnroll: FC<LayoutEnrollProps> = () => {
  const [infoData, setInfoData] = useState<userEnrollType[]>([]);
  const params = useParams();
  const navigate = useNavigate();

  // 进入用户详情页
  const toUserDetail = useCallback((record: userEnrollType) => {
    navigate(`/detail/${record.id}`);
  }, []);

  // 搜索
  const searchFinish = (value: searchType) => {
    getSearchData(value).then((res) => {
      console.log(res);
      setInfoData(res.data);
    });
  };
  // 更新数据
  useEffect(() => {
    reflashData();
  }, [params]);

  const reflashData = () => {
    getEnrollData(params.direction as string).then((res) => {
      setInfoData(res.data);
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
              <Input placeholder="请输入完整的姓名"></Input>
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
      <div className="tips">双击选项进入用户详情页</div>
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

export default memo(LayoutEnroll);
