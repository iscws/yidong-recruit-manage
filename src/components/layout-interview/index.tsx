import React, { memo, useEffect, useState } from 'react';
import type { FC, ReactNode } from 'react';
import { interviewTime } from '@/type';
import { InterviewWrapper } from './style';
import { useParams } from 'react-router-dom';
import {
  getInterviewTimeDirec,
  getRecruitTimeInfo,
  getTodayInfoFront
} from '@/service/api';
import { Button, Select } from 'antd';
// import { ColumnsType } from 'antd/es/table';

interface LayoutInterProps {
  children?: ReactNode;
}
interface item {
  id: number;
  date: string;
}

const LayoutInter: FC<LayoutInterProps> = () => {
  const params = useParams();
  const [dateList, setDateList] = useState<item[]>([]);
  // console.log('渲染一次');

  useEffect(() => {
    console.log(params.direction);
    // 获取今天日期
    getTodayInfoFront().then((res) => {
      console.log(res);
    });
    // 和数组内的元素进行筛选，如果有重合的部分则直接展示

    getInterviewTimeDirec(Number(params.direction)).then((res) => {
      const listData = res.data as interviewTime[];
      const list = listData.map((item) => {
        const date = item.startTime.split(' ')[0];
        return { id: item.id as number, date: date };
      });
      setDateList(list);
    });
  }, []);

  const handleChange = (value: number) => {
    console.log(`selected ${value}`);
    getRecruitTimeInfo(value).then((res) => {
      console.log(res);
    });
  };
  return (
    <InterviewWrapper>
      <div className="select-time">
        <div>选择日期：</div>
        <Select
          defaultActiveFirstOption
          style={{ width: 240 }}
          onChange={handleChange}
          fieldNames={{
            label: 'date',
            value: 'id'
          }}
          options={dateList}
        />
      </div>
      <div className="header">正在面试 Interviewing</div>

      <div className="btnbox">
        <Button size="large" className="next-btn" type="primary">
          下一位
        </Button>
      </div>

      <div className="header">待面试队列 Waiting</div>
    </InterviewWrapper>
  );
};

export default memo(LayoutInter);
