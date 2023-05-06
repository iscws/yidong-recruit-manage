import React, { useState, useEffect, useCallback } from 'react';
import type { FC, ReactNode } from 'react';
import { EditWrapper } from './style';
import { interviewTime } from '@/type';
import InterviewItem from '../interview-item';
import { Button, Form, Input, FloatButton, Empty, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import {
  editPreRecruitTime,
  getInterviewTimeDirec,
  getPreRecruitTime
} from '@/service/api';
import { useParams } from 'react-router-dom';
import { useThrottle } from '@/hooks/useThrottle';

interface LayoutEditProps {
  children?: ReactNode;
}

const LayoutEdit: FC<LayoutEditProps> = () => {
  const [infoData, setInfoData] = useState<interviewTime[]>([]);
  const [preTime, setPreTime] = useState(0);
  const params = useParams();

  // 新增面试时间
  const addTime = useCallback(() => {
    const date = new Date();
    setInfoData([
      ...infoData,
      {
        id: date.getTime(),
        startTime: date.toLocaleString(),
        endTime: date.toLocaleString(),
        quota: '',
        location: '',
        spareQuota: 0,
        isdefalut: true,
        direction: Number(params.direction)
      }
    ]);
    // 滑动到底部;
    setTimeout(() => {
      window.scrollTo(0, document.documentElement.scrollHeight);
    }, 50);
  }, [infoData]);

  // 更改面试前预约的时间
  const changeRecruitTime = useThrottle((value: { time: string }) => {
    editPreRecruitTime(Number(value.time)).then((res) => {
      res.code === 200
        ? message.success(res.message)
        : message.error(res.message);
    });
  }, 200);

  // 获取面试时间内容
  const fetchInterViewTime = () => {
    getInterviewTimeDirec(Number(params.direction)).then((res) => {
      setInfoData(res.data);
    });
  };

  // 获取面试时间
  const fetchPreRecruitTime = () => {
    getPreRecruitTime().then((res) => {
      res.code === 200 && setPreTime(res.data);
    });
  };
  // 获取面试数据
  useEffect(() => {
    fetchInterViewTime();
    fetchPreRecruitTime();
  }, [params]);

  return (
    <EditWrapper>
      <div className="items-header">
        {preTime !== 0 && (
          <Form
            name="timeForm"
            onFinish={changeRecruitTime}
            className="timeForm"
          >
            <Form.Item
              label="面试开始前多久能预约（单位：分钟）"
              name="time"
              initialValue={preTime}
            >
              <Input type="number" />
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit" type="primary">
                提交
              </Button>
            </Form.Item>
          </Form>
        )}
      </div>
      <div className="items-area">
        {infoData.length !== 0 ? (
          infoData.map((item) => {
            return (
              <InterviewItem
                infoData={item}
                key={item.id}
                fetchData={fetchInterViewTime}
              />
            );
          })
        ) : (
          <div className="emptyArea">
            <Empty
              imageStyle={{ height: 120 }}
              description={
                <span style={{ color: '#94979e' }}>什么都没有~</span>
              }
            >
              <Button type="primary" onClick={addTime}>
                添加面试时间
              </Button>
            </Empty>
          </div>
        )}
      </div>

      <div className="items-tips">
        <FloatButton
          type="primary"
          style={{ right: 24 }}
          icon={<PlusOutlined />}
          tooltip={<div>新增面试时间</div>}
          onClick={addTime}
        />
      </div>
    </EditWrapper>
  );
};

export default LayoutEdit;
