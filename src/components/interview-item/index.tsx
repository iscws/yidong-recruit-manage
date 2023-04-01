import React, { memo } from 'react';
import type { FC, ReactNode } from 'react';
import { interviewTime } from '@/type';
import { ItemWrapper } from './style';

interface IProps {
  infoData: interviewTime;
  children?: ReactNode;
}

const InterviewItem: FC<IProps> = ({
  infoData: { start, end, totalQuota, location }
}) => {
  return (
    <ItemWrapper>
      <div>{start}</div>
      <div>{totalQuota}</div>
      <div>{location}</div>
      <div>{end}</div>
    </ItemWrapper>
  );
};

export default memo(InterviewItem);
