import React from 'react';
import type { FC, ReactNode } from 'react';
import { EditWrapper } from './style';
import { interviewTime } from '@/type';
import InterviewItem from '../interview-item';
import { Button } from 'antd';

interface LayoutEditProps {
  children?: ReactNode;
  infoData: interviewTime[];
}

const LayoutEdit: FC<LayoutEditProps> = ({ infoData = [] }) => {
  return (
    <EditWrapper>
      {infoData.length !== 0 &&
        infoData.map((item) => {
          return <InterviewItem infoData={item} key={item.id} />;
        })}
      <Button className="new" type="dashed">
        新增面试时间
      </Button>
    </EditWrapper>
  );
};

export default LayoutEdit;
