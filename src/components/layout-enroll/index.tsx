import React, { useCallback } from 'react';
import type { FC, ReactNode } from 'react';
import { columns, userEnrollType } from '@/type/user';
import { Button, Table } from 'antd';
import { useNavigate } from 'react-router-dom';

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
  return (
    <div>
      <div className="area" style={{ textAlign: 'right', margin: '20px' }}>
        <Button onClick={reflashData}>刷新数据</Button>
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
    </div>
  );
};

export default LayoutEnroll;
