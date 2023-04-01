import React, { useEffect, useState } from 'react';
import type { FC, ReactNode } from 'react';
import { getInterviewTime } from '@/service/api';
import { EditWrapper } from './style';
import { interviewTime } from '@/type';
import InterviewItem from '../interview-item';

interface LayoutEditProps {
  children?: ReactNode;
}

const LayoutEdit: FC<LayoutEditProps> = () => {
  const [interviewData, setInterviewData] = useState<Array<interviewTime>>([]);
  useEffect(() => {
    getInterviewTime().then((res) => {
      setInterviewData(res.data);
      console.log(res.data);
    });
  }, []);
  return (
    <EditWrapper>
      {interviewData.length !== 0 &&
        interviewData.map((item) => {
          return <InterviewItem infoData={item} key={item.id} />;
        })}
    </EditWrapper>
  );
};

export default LayoutEdit;
