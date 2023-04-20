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
  pushInterview,
  setStatus
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
  const [interviewTimeId, setInterviewTimeId] = useState<number | undefined>(
    undefined
  );
  const [queueList, setQueueList] = useState<userEnrollType[]>([]);
  // 正在面试的队列
  const [isInterview, setIsInterview] = useState<userEnrollType[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      let innerInterviewTimeId: number | undefined = undefined;
      let innerTimeList: item[] = [];

      // 将获取过来的面试时间转化为 select组件需要的格式
      await getInterviewTimeDirec(Number(params.direction)).then((res) => {
        const listData = res.data as interviewTime[];
        innerTimeList = listData.map((item) => {
          const date = item.startTime;
          if (date.split(' ')[0] === formatDate(new Date()))
            innerInterviewTimeId = item.id as number;

          return { id: item.id as number, date: date };
        });
      });
      innerInterviewTimeId === undefined &&
        message.warning('今天暂无面试,请选择其他日期');

      // 加载数据
      fetchList(innerInterviewTimeId);

      setDateList(innerTimeList);
      setLoading(false);
    }
    fetchData();
  }, [params]);

  useEffect(() => {
    const timer = setInterval(() => {
      fetchList(interviewTimeId, false);
    }, 4000);
    return () => {
      clearInterval(timer);
    };
  }, [interviewTimeId]);
  // 更新待面试队列和排队队列
  const fetchList = async (value: number | undefined, forLoading = true) => {
    if (typeof value === 'number') {
      setInterviewTimeId(value);
      forLoading === true && setLoading(true);
      getRecruitTimeInfo(value).then(({ code, data }) => {
        code === 200 ? setQueueList(data.info) : setQueueList([]);
        forLoading === true && setLoading(false);
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

  const nextOne = useThrottle(async () => {
    // 如果此时有同学正在面试，则将他的面试状态修改为结束
    if (isInterviewId.current !== undefined) {
      await setStatus(isInterviewId.current, 6).then((res) => {
        console.log(res);
        res.code === 200 && message.success('已结束面试中同学的状态~');
      });
    }
    // 如果此时排队队列没人则刷新数据然后直接返回
    if (queueList.length === 0) {
      fetchList(interviewTimeId);
      return;
    }
    nextInterview(interviewTimeId as number).then((res) => {
      if (res.code === 200) {
        fetchList(interviewTimeId).then(() => {
          console.log(isInterviewId.current);
          isInterviewId.current !== undefined &&
            pushInterview(isInterviewId.current).then((res) => {
              console.log(res);
              res.code === 200
                ? message.success('修改成功~')
                : message.warning('该同学没有授权消息推送，请手动提醒');
            });
        });
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
          value={interviewTimeId}
          defaultActiveFirstOption
          style={{ width: 240 }}
          onChange={(e) => {
            fetchList(e, false);
          }}
          fieldNames={{
            label: 'date',
            value: 'id'
          }}
          loading={false}
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
