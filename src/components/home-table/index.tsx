import React, { memo, useCallback } from 'react';
import type { FC, ReactNode } from 'react';
import { userEnrollType } from '@/type';
import { Table, Button } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { useNavigate } from 'react-router-dom';

interface IProps {
  children?: ReactNode;
  infoData: userEnrollType[];
  showHeader?: boolean;
  loading?: boolean;
}

const HomeTable: FC<IProps> = (props) => {
  const navigate = useNavigate();
  const showHeader = props.showHeader ?? true;
  // 进入用户详情页
  const toUserDetail = useCallback((record: userEnrollType) => {
    navigate(`/detail/${record.id}`);
  }, []);
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
  return (
    <>
      <Table
        columns={columns}
        dataSource={props.infoData}
        rowKey="id"
        showHeader={showHeader}
        loading={props?.loading}
      />
    </>
  );
};

export default memo(HomeTable);
