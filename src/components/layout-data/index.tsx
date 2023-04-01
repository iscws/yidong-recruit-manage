import React, { Fragment, memo, useEffect, useState, useCallback } from 'react';
import type { FC, ReactNode } from 'react';
// import { getEnrollData } from '@/service/api';
// import { Input, Table } from 'antd';
// import type { ColumnsType } from 'antd/es/table';
import type { infoDataType, userEnrollType } from '@/type';
import { LayoutWrapper } from './styled';
import { getEnrollData } from '@/service/api';
import LayoutEdit from '../layout-edit';
import LayoutEnroll from '../layout-enroll';
import LayoutInter from '../layout-interview';

interface IProps {
  infoData: infoDataType;
  children?: ReactNode;
}

const LayoutData: FC<IProps> = ({ infoData: { type, direction } }) => {
  const [showData, setShowData] = useState<userEnrollType[] | undefined>();
  const fetchData = useCallback(() => {
    type === 'enroll' &&
      getEnrollData(direction).then((res) => {
        setShowData(res.data);
      });
  }, [type, direction]);

  useEffect(() => {
    fetchData();
  }, [type, direction]);

  return (
    <Fragment>
      {showData !== undefined && (
        <LayoutWrapper>
          {type === 'edit' && <LayoutEdit />}
          {type === 'enroll' && (
            <LayoutEnroll
              infoData={showData}
              direction={direction}
              reflashData={fetchData}
            />
          )}
          {type === 'interview' && <LayoutInter />}
        </LayoutWrapper>
      )}
    </Fragment>
  );
};

export default memo(LayoutData);
