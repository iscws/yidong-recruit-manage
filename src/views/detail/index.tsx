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
import { getUserInfoById } from '@/service/api';
import { useNavigate, useParams } from 'react-router-dom';
import {
  ArrowLeftOutlined,
  UserOutlined,
  UsergroupDeleteOutlined,
  FundOutlined,
  ExclamationCircleFilled
} from '@ant-design/icons';
import { MenuType } from '@/type';

interface DetailProps {
  children?: ReactNode;
}

const steps = [
  {
    title: '报名成功'
  },
  {
    title: '等待面试'
  },
  {
    title: '排队中'
  },
  {
    title: '面试中'
  },
  {
    title: '面试结束'
  }
];

const Detail: FC<DetailProps> = () => {
  // const [basicInfo, setBasicInfo] = useState<userEnrollType | null>(null);
  const params = useParams();
  const [current, setCurrent] = useState(0);
  const naviagate = useNavigate();
  const { confirm } = Modal;
  useEffect(() => {
    console.log(params);
    getUserInfoById(Number(params.id)).then((res) => {
      console.log(res);
    });
  }, []);

  const navigateTo = ({ type }: MenuType) => {
    console.log(type);

    naviagate(`/home/${type}/1`);
  };

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
            Zhou Maomao
          </Descriptions.Item>
          <Descriptions.Item label="电话" span={2}>
            1810000000
          </Descriptions.Item>
          <Descriptions.Item label="性别">
            <Radio.Group value={1}>
              <Radio value={1}>男</Radio>
              <Radio value={2}>女</Radio>
            </Radio.Group>
          </Descriptions.Item>
          <Descriptions.Item label="学院">计算机学院</Descriptions.Item>
          <Descriptions.Item label="专业">计算机类</Descriptions.Item>
          <Descriptions.Item label="方向">
            <Radio.Group value={1}>
              <Radio value={1}>前端</Radio>
              <Radio value={2}>后端</Radio>
            </Radio.Group>
          </Descriptions.Item>
          <Descriptions.Item label="自我介绍">
            11111111111111111111111111111111
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
                <Button type="primary" onClick={() => showConfirm()}>
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
            <Form name="assess" className="assess-area">
              <Form.Item
                name="intro"
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
