import React, { memo } from 'react';
import type { FC, ReactNode } from 'react';
import { interviewTime } from '@/type';
import { ItemWrapper } from './style';
import { Button, DatePicker, Form, Input, message } from 'antd';
import dayjs from 'dayjs';
import { addNewInterview, updateInterviewInfo } from '@/service/api';

interface IProps {
  infoData: interviewTime;
  children?: ReactNode;
}

const InterviewItem: FC<IProps> = ({ infoData }) => {
  const formSubmit = (value: any) => {
    const submitValue: interviewTime = {
      ...infoData,
      ...value,
      startTime: value['startTime'].format('YYYY-MM-DD HH:mm:ss'),
      endTime: value['endTime'].format('YYYY-MM-DD HH:mm:ss')
    };

    // console.log(submitValue);
    if (infoData.isdefalut === true) {
      console.log('新增新增');
      console.log(submitValue);
      const newValue = {
        startTime: submitValue.startTime,
        endTime: submitValue.endTime,
        direction: 1,
        location: submitValue.location,
        quota: submitValue.quota,
        spareQuota: submitValue.spareQuota
      };

      addNewInterview(newValue).then((res) => {
        if (res.code === 200) {
          message.success(res.message);
        } else {
          message.error('发生未知错误');
        }
        infoData.isdefalut = false;
      });
    } else {
      updateInterviewInfo(submitValue).then((res) => {
        if (res.code === 200) {
          message.success(res.message);
        } else {
          message.error('发生未知错误');
        }
      });
    }
  };
  return (
    <ItemWrapper>
      <div className="inner">
        <Form name="interviewForm" onFinish={formSubmit}>
          <Form.Item
            rules={[{ required: true, message: '请填写日期' }]}
            name="startTime"
            label="开始时间"
            initialValue={dayjs(infoData.startTime)}
          >
            <DatePicker format="YYYY-MM-DD HH:mm:ss" />
          </Form.Item>

          <Form.Item
            name="endTime"
            label="结束时间"
            initialValue={dayjs(infoData.endTime)}
            rules={[{ required: true, message: '请填写日期' }]}
          >
            <DatePicker format="YYYY-MM-DD HH:mm:ss" />
          </Form.Item>

          <Form.Item
            name="quota"
            label="总名额"
            initialValue={infoData.quota}
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
              {infoData.isdefalut === true ? '确定新建' : '更改'}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </ItemWrapper>
  );
};

export default memo(InterviewItem);
