import React, { Fragment, memo, useEffect, useState, useCallback } from 'react';
import type { FC, ReactNode } from 'react';
import type { infoDataType, interviewTime, userEnrollType } from '@/type';
import { LayoutWrapper } from './styled';
import { getEnrollData, getInterviewTime } from '@/service/api';
import LayoutEdit from '../layout-edit';
import LayoutEnroll from '../layout-enroll';
import LayoutInter from '../layout-interview';

interface IProps {
  infoData: infoDataType;
  children?: ReactNode;
}

const LayoutData: FC<IProps> = ({ infoData: { type, direction } }) => {
  const [showData, setShowData] = useState<unknown>();
  // 在这里统一对数据进行获取
  const fetchData = useCallback(() => {
    switch (type) {
      case 'enroll':
        getEnrollData(direction).then((res) => {
          setShowData(res.data);
        });
        break;
      case 'edit':
        getInterviewTime().then((res) => {
          setShowData(res.data);
          console.log(res.data);
        });
        break;
    }
  }, [type, direction]);

  useEffect(() => {
    fetchData();
  }, [type, direction]);

  return (
    <Fragment>
      {showData !== undefined && (
        <LayoutWrapper>
          {type === 'edit' && (
            <LayoutEdit infoData={showData as interviewTime[]} />
          )}
          {type === 'enroll' && (
            <LayoutEnroll
              infoData={showData as userEnrollType[]}
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
