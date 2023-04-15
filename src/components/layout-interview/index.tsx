import React, { memo, useEffect, useState } from 'react';
import type { FC, ReactNode } from 'react';
import { interviewTime, userEnrollType } from '@/type';
import { InterviewWrapper } from './style';
import { useParams } from 'react-router-dom';
import {
  getInterviewTimeDirec,
  getRecruitTimeInfo,
  getTodayInfo
} from '@/service/api';
import { Button, Select } from 'antd';
import HomeTable from '../home-table';
import { formatDate } from '@/utils';
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
  const [currId, setCurrId] = useState<number | undefined>(undefined);
  const [queueList, setQueueList] = useState<userEnrollType[]>([]);
  const [isInterview] = useState<userEnrollType[]>([]);

  useEffect(() => {
    async function fetchData() {
      let innerCurrId = -1;
      let innerQuene = [];
      let innerTimeList: item[] = [];
      // 获取今天日期
      const todayInfo = await getTodayInfo(Number(params.direction)).then(
        (res) => {
          console.log(res);

          return res.data;
        }
      );
      console.log(todayInfo);
      // 将当天数据传入队列当中
      if (todayInfo !== null && todayInfo.info !== null) {
        innerQuene = todayInfo.info;
      } else {
        innerTimeList.push({
          id: -1,
          date: formatDate(new Date())
        });
      }

      // 和数组内的元素进行筛选，如果有重合的部分则直接展示
      await getInterviewTimeDirec(Number(params.direction)).then((res) => {
        const listData = res.data as interviewTime[];
        const list = listData.map((item) => {
          const date = item.startTime;
          if (todayInfo !== null && todayInfo.id === item.id) {
            innerCurrId = item.id as number;
          }
          return { id: item.id as number, date: date };
        });
        innerTimeList = [...list, ...innerTimeList];
      });

      setQueueList(innerQuene);
      setDateList(innerTimeList);
      setCurrId(innerCurrId);
    }
    fetchData();
  }, [params]);

  const handleChange = (value: number) => {
    console.log(`selected ${value}`);
    getRecruitTimeInfo(value).then(({ code, data }) => {
      console.log(data);

      if (code === 200) {
        setQueueList(data.info);
      } else {
        setQueueList([]);
      }
    });
  };
  return (
    <InterviewWrapper>
      <div className="select-time">
        <div>选择日期：</div>
        {currId !== undefined && (
          <Select
            defaultValue={currId}
            defaultActiveFirstOption
            style={{ width: 240 }}
            onChange={handleChange}
            fieldNames={{
              label: 'date',
              value: 'id'
            }}
            options={dateList}
          />
        )}
      </div>
      <div className="header">正在面试 Interviewing</div>
      <HomeTable infoData={isInterview} showHeader={false} />
      <div className="btnbox">
        <Button size="large" className="next-btn" type="primary">
          下一位
        </Button>
      </div>

      <div className="header">待面试队列 Waiting</div>
      <HomeTable infoData={queueList} showHeader={false} />
    </InterviewWrapper>
  );
};

export default memo(LayoutInter);
