import React, { memo } from 'react';
import type { FC, ReactNode } from 'react';

interface LayoutInterProps {
  children?: ReactNode;
}

const LayoutInter: FC<LayoutInterProps> = () => {
  return <div>LayoutInter</div>;
};

export default memo(LayoutInter);
