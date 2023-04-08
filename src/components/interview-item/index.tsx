import React, { memo, useEffect, useState } from 'react';
import type { FC, ReactNode } from 'react';
import { interviewTime } from '@/type';
import { ItemWrapper } from './style';
import {
  Button,
  DatePicker,
  Form,
  Input,
  message,
  Popconfirm,
  Radio,
  TimePicker
} from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import {
  addNewInterview,
  deleteInterviewTime,
  getAppointSec,
  updateInterviewInfo
} from '@/service/api';

interface IProps {
  infoData: interviewTime;
  children?: ReactNode;
}

const InterviewItem: FC<IProps> = ({ infoData }) => {
  const [isDelete, setIsDelete] = useState(false);
  // const [isAppoint, setIsAppoint] = useState(false);
  const [isDefault, setIsDefault] = useState(infoData.isdefalut ?? false);
  const deleteItem = async () => {
    if (!isDefault) {
      const res = await deleteInterviewTime(infoData.id as number);
      if (res.code === 200) {
        message.success('删除成功');
        setIsDelete(true);
      } else {
        message.error(res.message);
      }
    } else {
      message.success('删除成功');
      setIsDelete(true);
    }
  };
  const formSubmit = (value: any) => {
    const submitValue: interviewTime = {
      ...infoData,
      ...value,
      startTime:
        value['date'].format('YYYY-MM-DD') +
        ' ' +
        value['startTime'].format('HH:mm:ss'),
      endTime:
        value['date'].format('YYYY-MM-DD') +
        ' ' +
        value['endTime'].format('HH:mm:ss')
    };
    console.log(submitValue);

    // console.log(submitValue);
    if (isDefault) {
      addNewInterview(submitValue).then((res) => {
        if (res.code === 200) {
          message.success(res.message);
          setIsDefault(false);
        } else {
          message.error(res.message);
        }
      });
    } else {
      updateInterviewInfo(submitValue).then((res) => {
        if (res.code === 200) {
          message.success(res.message);
        } else {
          message.error(res.message);
        }
      });
    }
  };

  useEffect(() => {
    // 查询当前时间是否能被更改
    getAppointSec(infoData.id as number).then((res) => {
      console.log(infoData.id, res);
    });
  }, []);
  return isDelete ? null : (
    <ItemWrapper>
      <div className="inner">
        <Form name="interviewForm" onFinish={formSubmit}>
          <Form.Item
            rules={[{ required: true, message: '请填写日期' }]}
            name="date"
            label="日期"
            initialValue={dayjs(infoData.startTime)}
          >
            <DatePicker format="YYYY-MM-DD" />
          </Form.Item>

          <Form.Item
            name="startTime"
            label="开始时间"
            initialValue={dayjs(infoData.startTime)}
            rules={[{ required: true, message: '请填写时间' }]}
          >
            <TimePicker format={'HH:mm'} />
          </Form.Item>

          <Form.Item
            name="endTime"
            label="结束时间"
            initialValue={dayjs(infoData.endTime)}
            rules={[{ required: true, message: '请填写日期' }]}
          >
            <TimePicker format={'HH:mm'} />
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
            name="direction"
            label="方向"
            initialValue={infoData.direction}
            rules={[{ required: true, message: '请填写方向' }]}
          >
            <Radio.Group>
              <Radio value={1}> 前端 </Radio>
              <Radio value={2}> 后端 </Radio>
            </Radio.Group>
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
              {isDefault ? '确定新建' : '更改'}
            </Button>
          </Form.Item>
        </Form>

        <Popconfirm
          title="删除面试时间"
          description="你确定要删除这个面试时间段吗？"
          okText="确定"
          cancelText="取消"
          onConfirm={deleteItem}
        >
          <div className="delete">
            <DeleteOutlined style={{ fontSize: '16px', color: 'red' }} />
          </div>
        </Popconfirm>
      </div>
    </ItemWrapper>
  );
};

export default memo(InterviewItem);
