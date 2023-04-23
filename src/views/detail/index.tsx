import React, { useEffect, useState } from 'react';
import type { FC, ReactNode } from 'react';
import { DetailWrapper } from './style';
import {
  Descriptions,
  Radio,
  Card,
  Form,
  Input,
  Button,
  message,
  FloatButton
} from 'antd';
import { getUserInfoById, setUserAssess } from '@/service/api';
import { useNavigate, useParams } from 'react-router-dom';
import {
  ArrowLeftOutlined,
  UserOutlined,
  UsergroupDeleteOutlined,
  FundOutlined
} from '@ant-design/icons';
import { MenuType, userEnrollType } from '@/type';
import { useThrottle } from '@/hooks/useThrottle';
import DetailStatus from '@/components/detail-status';

interface DetailProps {
  children?: ReactNode;
}

const Detail: FC<DetailProps> = () => {
  const [basicInfo, setBasicInfo] = useState<userEnrollType | null>(null);
  const params = useParams();
  const [status, setStatus] = useState<string>('');
  const naviagate = useNavigate();

  const changeStatusFn = (value: string) => {
    setStatus(value);
  };
  useEffect(() => {
    getUserInfoById(Number(params.id)).then((res) => {
      setBasicInfo(res.data);
      changeStatusFn(res.data.status);
    });
  }, []);

  const navigateTo = ({ type }: MenuType) => {
    naviagate(`/home/${type}/1`);
  };
  const submitAssess = useThrottle((e) => {
    if (e.assess !== basicInfo?.assess) {
      setUserAssess(Number(params.id), e.assess).then((res) => {
        res.code === 200
          ? message.success(res.message)
          : message.error(res.message);
      });
    } else {
      message.warning('没有做任何修改！');
    }
  }, 1000);
  return (
    <DetailWrapper>
      <div className="basic-info">
        <Descriptions
          title="基本信息"
          layout="vertical"
          bordered={true}
          column={2}
        >
          <Descriptions.Item label="姓名">
            {basicInfo?.username}
          </Descriptions.Item>
          <Descriptions.Item label="电话">{basicInfo?.phone}</Descriptions.Item>
          <Descriptions.Item label="性别">
            <Radio.Group value={basicInfo?.sex === '男' ? 1 : 2}>
              <Radio value={1}>男</Radio>
              <Radio value={2}>女</Radio>
            </Radio.Group>
          </Descriptions.Item>
          <Descriptions.Item label="学院">
            {basicInfo?.college}
          </Descriptions.Item>
          <Descriptions.Item label="专业">{basicInfo?.major}</Descriptions.Item>
          <Descriptions.Item label="方向">
            <Radio.Group value={basicInfo?.direction === '前端' ? 1 : 2}>
              <Radio value={1}>前端</Radio>
              <Radio value={2}>后端</Radio>
            </Radio.Group>
          </Descriptions.Item>
          <Descriptions.Item label="自我介绍">
            {basicInfo?.introduction}
          </Descriptions.Item>
        </Descriptions>
      </div>
      <div className="edit-info">
        <div className="card-item status">
          {status !== '' && (
            <DetailStatus
              status={status}
              changeStatusFn={changeStatusFn}
              id={Number(params.id)}
            />
          )}
        </div>
        <div className="card-item assess">
          <Card title="面评">
            {basicInfo !== null && (
              <Form
                name="assess"
                className="assess-area"
                onFinish={submitAssess}
              >
                <Form.Item
                  name="assess"
                  initialValue={basicInfo?.assess}
                  rules={[{ required: true, message: '请至少写一个字' }]}
                >
                  <Input.TextArea
                    showCount
                    maxLength={400}
                    style={{ height: '40vh' }}
                    placeholder="这位同学基础怎么说"
                  />
                </Form.Item>

                <Form.Item style={{ textAlign: 'right' }}>
                  <Button htmlType="submit">提交</Button>
                </Form.Item>
              </Form>
            )}
          </Card>
        </div>
        <FloatButton.Group
          trigger="click"
          type="primary"
          style={{ right: 24 }}
          icon={<ArrowLeftOutlined />}
        >
          <FloatButton
            icon={<UsergroupDeleteOutlined />}
            tooltip={'回到面试情况'}
            onClick={() => {
              navigateTo({ type: 'interview' });
            }}
          />
          <FloatButton
            icon={<UserOutlined />}
            tooltip={'回到报名情况'}
            onClick={() => {
              navigateTo({ type: 'enroll' });
            }}
          />

          <FloatButton
            icon={<FundOutlined />}
            tooltip={'回到修改面试'}
            onClick={() => {
              navigateTo({ type: 'edit' });
            }}
          />
        </FloatButton.Group>
      </div>
    </DetailWrapper>
  );
};

export default Detail;
