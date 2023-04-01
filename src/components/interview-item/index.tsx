import React, { memo } from 'react';
import type { FC, ReactNode } from 'react';
import { interviewTime } from '@/type';
import { ItemWrapper } from './style';
import { Button, DatePicker, Form, Input } from 'antd';
import dayjs from 'dayjs';
import { updateInterviewInfo } from '@/service/api';

interface IProps {
  infoData: interviewTime;
  children?: ReactNode;
}

const InterviewItem: FC<IProps> = ({ infoData }) => {
  const formSubmit = (value: any) => {
    const submitValue = {
      ...value,
      startTime: value['startTime'].format('YYYY-MM-DD'),
      endTime: value['endTime'].format('YYYY-MM-DD'),
      id: infoData.id
    };

    console.log(submitValue);
    updateInterviewInfo(submitValue).then((res) => {
      console.log(res);
    });
  };
  return (
    <ItemWrapper>
      <div className="inner">
        <Form name="interviewForm" onFinish={formSubmit}>
          <Form.Item
            rules={[{ required: true, message: '请填写日期' }]}
            name="startTime"
            label="开始时间"
            initialValue={dayjs(infoData.start)}
          >
            <DatePicker format="YYYY-MM-DD HH:mm:ss" />
          </Form.Item>

          <Form.Item
            name="endTime"
            label="结束时间"
            initialValue={dayjs(infoData.end)}
            rules={[{ required: true, message: '请填写日期' }]}
          >
            <DatePicker format="YYYY-MM-DD HH:mm:ss" />
          </Form.Item>

          <Form.Item
            name="quota"
            label="总名额"
            initialValue={infoData.totalQuota}
            rules={[{ required: true, message: '请填写名额' }]}
          >
            <Input type="number" />
          </Form.Item>

          <Form.Item
            name="location"
            label="地点"
            initialValue={infoData.location}
            rules={[{ required: true, message: '请填写地点' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              更改
            </Button>
          </Form.Item>
        </Form>
      </div>
    </ItemWrapper>
  );
};

export default memo(InterviewItem);
