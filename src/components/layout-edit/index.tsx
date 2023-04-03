import React from 'react';
import type { FC, ReactNode } from 'react';
import { EditWrapper } from './style';
import { interviewTime } from '@/type';
import InterviewItem from '../interview-item';
import { Button, Form, Input, FloatButton } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

interface LayoutEditProps {
  children?: ReactNode;
  infoData: interviewTime[];
  changeDataFn: (props: any) => void;
}

const LayoutEdit: FC<LayoutEditProps> = ({ infoData = [], changeDataFn }) => {
  // const [infoData, setinfoData] = useState(infoData);

  const changeRecruitTime = (value: { time: string }) => {
    console.log(value);
  };

  const newOne = () => {
    const date = new Date();
    changeDataFn([
      ...infoData,
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
    setTimeout(() => {
      window.scrollTo(0, document.documentElement.scrollHeight);
    }, 50);
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
        {infoData.length !== 0 &&
          infoData.map((item) => {
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
