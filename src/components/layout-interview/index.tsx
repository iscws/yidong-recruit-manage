import React, { memo, useEffect, useState, useRef } from 'react';
import type { FC, ReactNode } from 'react';
import { interviewTime, userEnrollType } from '@/type';
import { InterviewWrapper } from './style';
import { useParams } from 'react-router-dom';
import {
  getInterviewTimeDirec,
  getIsInterviewByid,
  getRecruitTimeInfo,
  nextInterview,
  pushInterview
} from '@/service/api';
import { Button, message, Select } from 'antd';
import HomeTable from '../home-table';
import { useThrottle } from '@/hooks/useThrottle';
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
  const isInterviewId = useRef<undefined | number>(undefined);

  const [dateList, setDateList] = useState<item[]>([]);
  const [currId, setCurrId] = useState<number | undefined>(undefined);
  const [queueList, setQueueList] = useState<userEnrollType[]>([]);
  // 正在面试的队列
  const [isInterview, setIsInterview] = useState<userEnrollType[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      let innerCurrId: number | undefined = undefined;
      let innerTimeList: item[] = [];

      // 将获取过来的面试时间转化为 select组件需要的格式
      await getInterviewTimeDirec(Number(params.direction)).then((res) => {
        const listData = res.data as interviewTime[];
        innerTimeList = listData.map((item) => {
          const date = item.startTime;
          if (date.split(' ')[0] === formatDate(new Date()))
            innerCurrId = item.id as number;

          return { id: item.id as number, date: date };
        });
      });
      innerCurrId === undefined &&
        message.warning('今天暂无面试,请选择其他日期');

      // 加载数据
      handleChange(innerCurrId);

      setDateList(innerTimeList);
      setLoading(false);
    }
    fetchData();
  }, [params]);

  const handleChange = async (value: number | undefined) => {
    if (typeof value === 'number') {
      setCurrId(value);
      setLoading(true);
      getRecruitTimeInfo(value).then(({ code, data }) => {
        code === 200 ? setQueueList(data.info) : setQueueList([]);
        setLoading(false);
      });
      // 获取正在面试的队列
      await getIsInterviewByid(value).then((res) => {
        console.log('正在面试', res);

        res.code === 200 ? setIsInterview([res.data]) : setIsInterview([]);
        res.data !== null
          ? (isInterviewId.current = res.data.id)
          : (isInterviewId.current = undefined);
      });
    } else return;
  };

  const nextOne = useThrottle(() => {
    nextInterview(currId as number, isInterviewId.current).then((res) => {
      if (res.code === 200) {
        handleChange(currId).then(() => {
          console.log(isInterviewId.current);
          isInterviewId.current !== undefined &&
            pushInterview(isInterviewId.current).then((res) => {
              console.log(res);
            });
        });
        message.success('修改成功~');
      } else {
        message.error(res.message);
        console.log(res);
      }
    });
  }, 2000);
  return (
    <InterviewWrapper>
      <div className="select-time">
        <span>选择日期：</span>
        <Select
          value={currId}
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
      <HomeTable
        infoData={isInterview}
        showHeader={false}
        loading={loading}
        pagination={false}
      />
      <div className="btnbox">
        <Button
          size="large"
          className="next-btn"
          type="dashed"
          onClick={nextOne}
        >
          下一位
        </Button>
      </div>

      <div className="header">待面试队列 Waiting</div>
      <HomeTable infoData={queueList} showHeader={false} loading={loading} />
    </InterviewWrapper>
  );
};

export default memo(LayoutInter);
