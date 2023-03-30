import React from 'react';
import type { FC, ReactNode } from 'react';
import { userEnrollType } from '@/type/user';

interface LayoutEnrollProps {
  children?: ReactNode;
  infoData: userEnrollType | undefined;
  direction: number;
}

const LayoutEnroll: FC<LayoutEnrollProps> = (props) => {
  console.log(props.infoData);

  return <div>LayoutEnroll</div>;
};

export default LayoutEnroll;
