import React, { useCallback, memo, useState, useEffect } from 'react';
import type { FC, ReactNode } from 'react';
import { searchType, userEnrollType } from '@/type';
import { Button, Form, Input, message, Table } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import { EnrollWrapper } from './style';
import { getEnrollData, getSearchData } from '@/service/api';
import { ColumnsType } from 'antd/es/table';
import { useThrottle } from '@/hooks/useThrottle';

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
  const searchFinish = useThrottle((value: searchType) => {
    console.log(value);

    if (value.username === undefined || value.username === '') {
      reflashData();
      return;
    }
    getSearchData(value).then((res) => {
      if (res.code === 200 && res.data !== null) {
        setInfoData([res.data]);
        message.success(res.message);
      } else {
        setInfoData([]);
        message.error(res.message + ',请输入全名');
      }
    });
  }, 1000);

  const columns: ColumnsType<userEnrollType> = [
    {
      title: '名字',
      dataIndex: 'username',
      key: 'username',
      filterMode: 'tree'
    },
    {
      title: '性别',
      key: 'sex',
      dataIndex: 'sex'
    },
    {
      title: '学号',
      key: 'studentId',
      dataIndex: 'studentId'
    },
    {
      title: '手机号码',
      key: 'phone',
      dataIndex: 'phone'
    },
    {
      title: '学院',
      key: 'college',
      dataIndex: 'college'
    },
    {
      title: '专业',
      key: 'major',
      dataIndex: 'major'
    },
    {
      title: '状态',
      key: 'status',
      dataIndex: 'status'
    },
    {
      title: '进入详情',
      key: 'index',
      render: (record: userEnrollType) => {
        return (
          <Button onClick={() => toUserDetail(record)} type="primary">
            进入详情
          </Button>
        );
      }
    }
  ];
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
            <Form.Item name="username">
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
      <Table columns={columns} dataSource={infoData} rowKey="id" />
    </EnrollWrapper>
  );
};

export default memo(LayoutEnroll);
