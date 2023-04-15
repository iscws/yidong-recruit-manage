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
  Popover,
  Radio,
  TimePicker
} from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import {
  addNewInterview,
  deleteInterviewTime,
  getAppointSec,
  updateInterviewInfo,
  getRecruitTimeInfo
} from '@/service/api';
import { useParams } from 'react-router-dom';

interface IProps {
  infoData: interviewTime;
  children?: ReactNode;
}

const InterviewItem: FC<IProps> = ({ infoData }) => {
  const [isDelete, setIsDelete] = useState<boolean>(false);
  const [innerData, setInnerData] = useState(infoData);
  const [isAppoint, setIsAppoint] = useState<boolean>(false);
  const [isDefault, setIsDefault] = useState(infoData.isdefalut ?? false);

  const params = useParams();
  const deleteItem = async () => {
    if (!isDefault) {
      const res = await deleteInterviewTime(infoData.id as number);
      if (res.code !== 200) {
        message.error(res.message);
        return;
      }
    }
    message.success('删除成功');
    setIsDelete(true);
  };
  const formSubmit = (value: any) => {
    const submitValue: interviewTime = {
      id: infoData.id as number,
      location: value.location,
      direction: Number(params.direction),
      quota: value.quota,
      startTime:
        value['date'].format('YYYY-MM-DD') +
        ' ' +
        value['startTime'].format('HH:mm:ss'),
      endTime:
        value['date'].format('YYYY-MM-DD') +
        ' ' +
        value['endTime'].format('HH:mm:ss')
    };
    if (isDefault) {
      addNewInterview(submitValue).then((res) => {
        if (res.code === 200) {
          infoData.id = res.data;
          message.success('添加成功');
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

  const restInterview = () => {
    getRecruitTimeInfo(infoData.id as number).then((res) => {
      console.log(res);
    });
  };

  useEffect(() => {
    // 查询当前时间是否能被更改
    !isDefault &&
      getAppointSec(infoData.id as number).then((res) => {
        setIsAppoint(!res.data as boolean);
      });
  }, []);

  useEffect(() => {
    setInnerData(infoData);
  }, [infoData]);
  return isDelete ? null : (
    <ItemWrapper>
      <div className="inner">
        <Form name="interviewForm" onFinish={formSubmit}>
          <Form.Item
            rules={[{ required: true, message: '请填写日期' }]}
            name="date"
            label="日期"
            initialValue={dayjs(innerData.startTime)}
          >
            <DatePicker format="YYYY-MM-DD" />
          </Form.Item>

          <Form.Item
            name="startTime"
            label="开始时间"
            initialValue={dayjs(innerData.startTime)}
            rules={[{ required: true, message: '请填写时间' }]}
          >
            <TimePicker format={'HH:mm'} disabled={isAppoint} />
          </Form.Item>
          <Form.Item
            name="endTime"
            label="结束时间"
            initialValue={dayjs(innerData.endTime)}
            rules={[{ required: true, message: '请填写日期' }]}
          >
            <TimePicker format={'HH:mm'} />
          </Form.Item>

          <Form.Item
            name="quota"
            label="总名额"
            initialValue={innerData.quota}
            rules={[{ required: true, message: '请填写名额' }]}
          >
            <Input type="number" />
          </Form.Item>

          <Form.Item
            name="location"
            label="地点"
            initialValue={innerData.location}
            rules={[{ required: true, message: '请填写地点' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="方向"
            initialValue={innerData.direction}
            rules={[{ required: true, message: '请填写方向' }]}
          >
            <Radio.Group value={innerData.direction}>
              <Radio value={1}> 前端 </Radio>
              <Radio value={2}> 后端 </Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item>
            <div className="btnArea">
              <Button type="primary" htmlType="submit">
                {isDefault ? '确定新建' : '更改'}
              </Button>

              <Popover
                content={'剩余名额：' + innerData.spareQuota}
                trigger={'click'}
              >
                <Button onClick={restInterview}>查看更多</Button>
              </Popover>
            </div>
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
