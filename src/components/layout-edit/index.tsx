import React, { useState } from 'react';
import type { FC, ReactNode } from 'react';
import { EditWrapper } from './style';
import { interviewTime } from '@/type';
import InterviewItem from '../interview-item';
import { Button, Form, Input, FloatButton } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

interface LayoutEditProps {
  children?: ReactNode;
  infoData: interviewTime[];
}

const LayoutEdit: FC<LayoutEditProps> = ({ infoData = [] }) => {
  const [innerInfoData, setInnerInfoData] = useState(infoData);
  const changeRecruitTime = (value: any) => {
    console.log(value);
  };

  const newOne = () => {
    window.scrollTo(0, document.documentElement.scrollHeight);
    const date = new Date();
    setInnerInfoData([
      ...innerInfoData,
      {
        id: date.getTime(),
        startTime: date.toLocaleString(),
        endTime: date.toLocaleString(),
        quota: '',
        location: '',
        spareQuota: 0,
        isdefalut: true
      }
    ]);
  };
  return (
    <EditWrapper>
      <div className="items-header">
        <Form name="timeForm" onFinish={changeRecruitTime} className="timeForm">
          <Form.Item
            label="面试开始前多久能预约（单位：分钟）"
            name="time"
            initialValue={0}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" type="primary">
              提交
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className="items-area">
        {innerInfoData.length !== 0 &&
          innerInfoData.map((item) => {
            return <InterviewItem infoData={item} key={item.id} />;
          })}
      </div>
      <div className="items-tips">
        <FloatButton
          type="primary"
          style={{ right: 24 }}
          icon={<PlusOutlined />}
          tooltip={<div>新增面试时间</div>}
          onClick={newOne}
        />
      </div>
    </EditWrapper>
  );
};

export default LayoutEdit;
