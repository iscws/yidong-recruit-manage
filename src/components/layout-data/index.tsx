import React, { memo, useEffect, useState } from 'react';
import type { FC, ReactNode } from 'react';
// import { getEnrollData } from '@/service/api';
import axios from 'axios';
import { Input, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import type { infoDataType, userEnrollType } from '@/type/user';
import { LayoutWrapper } from './styled';
import { getEnrollData } from '@/service/api';

interface IProps {
  infoData: infoDataType;
  children?: ReactNode;
}

const columns: ColumnsType<userEnrollType> = [
  {
    title: '名字',
    dataIndex: 'username',
    key: 'username',
    render: (text: any) => <a>{text}</a>
  },
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id'
  },
  {
    title: 'openId',
    dataIndex: 'openId',
    key: 'openId'
  },
  {
    title: 'sex',
    key: 'sex',
    dataIndex: 'sex'
  },
  {
    title: 'studentId',
    key: 'studentId',
    dataIndex: 'studentId'
  },
  {
    title: 'phone',
    key: 'phone',
    dataIndex: 'phone'
  },
  {
    title: 'college',
    key: 'college',
    dataIndex: 'college'
  },
  {
    title: 'major',
    key: 'major',
    dataIndex: 'major'
  },
  {
    title: 'introduction',
    key: 'introduction',
    dataIndex: 'introduction'
  },
  {
    title: 'status',
    key: 'status',
    dataIndex: 'status'
  }
];

const LayoutData: FC<IProps> = ({ infoData: { type, direction } }) => {
  const [showData, setShowData] = useState();
  useEffect(() => {
    console.log(type, direction);
    type === 'enroll' &&
      getEnrollData(direction).then((res) => {
        setShowData(res.data);
      });
  }, [type, direction]);
  return (
    <LayoutWrapper>
      {type === 'enroll' && (
        <div className="search-area">
          <Input placeholder="查找姓名" />
        </div>
      )}
      <Table columns={columns} dataSource={showData} rowKey="id" />;
    </LayoutWrapper>
  );
};

export default memo(LayoutData);
