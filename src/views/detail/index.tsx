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
  Steps,
  message,
  FloatButton,
  Modal
} from 'antd';
import { getUserInfoById, setUserAssess } from '@/service/api';
import { useNavigate, useParams } from 'react-router-dom';
import {
  ArrowLeftOutlined,
  UserOutlined,
  UsergroupDeleteOutlined,
  FundOutlined,
  ExclamationCircleFilled
} from '@ant-design/icons';
import { MenuType, userEnrollType } from '@/type';
import { useThrottle } from '@/hooks/useThrottle';

interface DetailProps {
  children?: ReactNode;
}
const steps = [
  {
    key: 0,
    title: '报名成功'
  },
  {
    key: 1,
    title: '等待面试'
  },
  {
    key: 2,
    title: '排队中'
  },
  {
    key: 3,
    title: '面试中'
  },
  {
    key: 4,
    title: '面试结束'
  }
];

const stepsMap = new Map([
  ['报名成功', 0],
  ['等待面试', 1],
  ['排队中', 2],
  ['面试中', 3],
  ['面试结束', 4]
]);
const Detail: FC<DetailProps> = () => {
  const [basicInfo, setBasicInfo] = useState<userEnrollType | null>(null);
  const params = useParams();
  const [current, setCurrent] = useState(0);
  const naviagate = useNavigate();
  const { confirm } = Modal;
  useEffect(() => {
    getUserInfoById(Number(params.id)).then((res) => {
      setCurrent(stepsMap.get(res.data.status) as number);
      setBasicInfo(res.data);
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
  const showConfirm = () => {
    confirm({
      title: '你确定要切换状态吗？',
      content: '请确保该状态已经结束',
      icon: <ExclamationCircleFilled />,
      onOk() {
        setCurrent(current + 1);
      },
      onCancel() {
        console.log('Cancel');
      }
    });
  };
  return (
    <DetailWrapper>
      <div className="basic-info">
        <Descriptions
          title="基本信息"
          layout="vertical"
          bordered={true}
          column={2}
        >
          <Descriptions.Item label="姓名" span={2}>
            {basicInfo?.username}
          </Descriptions.Item>
          <Descriptions.Item label="电话" span={2}>
            {basicInfo?.phone}
          </Descriptions.Item>
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
          <Card title="当前状态">
            <Steps
              current={current}
              items={steps.map((item) => ({
                key: item.title,
                title: item.title
              }))}
              className="step-area"
            />
            <div style={{ marginTop: 24 }}>
              {current < steps.length - 1 && (
                <Button
                  type="primary"
                  onClick={() => showConfirm()}
                  disabled={current <= 1}
                >
                  下一个状态
                </Button>
              )}
              {current === steps.length - 1 && (
                <Button
                  type="primary"
                  onClick={() => message.success('Processing complete!')}
                >
                  结束
                </Button>
              )}
            </div>
          </Card>
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
                  <Button htmlType="submit" disabled={current < 3}>
                    提交
                  </Button>
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
