import React, { memo, useState } from 'react';
import type { FC, ReactNode } from 'react';
import { Button, message, Modal, Select } from 'antd';
import { StatusWrapper } from './style';
import { ExclamationCircleFilled } from '@ant-design/icons';
import { setUserStatus } from '@/service/api';

interface IProps {
  children?: ReactNode;
  status: string;
  changeStatusFn: (value: string) => void;
  id: number;
}

const statusOptions = [
  {
    value: 2,
    label: '报名成功',
    disabled: true
  },
  {
    value: 3,
    label: '等待面试排队',
    disabled: true
  },
  {
    value: 4,
    label: '排队中',
    disabled: true
  },
  {
    value: 5,
    label: '面试中'
  },
  {
    value: 6,
    label: '面试结束'
  },
  {
    value: 7,
    label: '面试通过'
  },
  {
    value: 8,
    label: '面试失败'
  }
];

const stepsMap = new Map([
  ['报名成功', 2],
  ['等待面试排队', 3],
  ['排队中', 4],
  ['面试中', 5],
  ['面试结束', 6],
  ['面试通过', 7],
  ['面试失败', 8]
]);

const stepsMapReverse = new Map([
  [0, '暂未排队'],
  [2, '报名成功'],
  [3, '等待面试排队'],
  [4, '排队中'],
  [5, '面试中'],
  [6, '面试结束'],
  [7, '面试通过'],
  [8, '面试失败']
]);

const DetailStatus: FC<IProps> = ({ status, changeStatusFn, id }) => {
  const [innerStatus, setInnerStatus] = useState(stepsMap.get(status));
  const { confirm } = Modal;
  const selcetChange = (e: any) => {
    setInnerStatus(e);
  };
  const showConfirm = () => {
    confirm({
      title: '你确定要切换状态吗？',
      content: `即将从 ${status} 更改为 ${stepsMapReverse.get(
        innerStatus as number
      )}`,
      icon: <ExclamationCircleFilled />,
      onOk() {
        console.log('更改');
        innerStatus !== undefined &&
          setUserStatus(id, innerStatus).then((res) => {
            if (res.code === 200) {
              message.success('修改状态成功');
              changeStatusFn(stepsMapReverse.get(innerStatus) as string);
            }
          });
      },
      onCancel() {
        console.log('Cancel');
      },
      okText: '确定',
      cancelText: '取消'
    });
  };
  return (
    <StatusWrapper>
      <div className="show-status-container">
        <span className="label">当前状态：</span>
        <Select
          style={{ width: '140px' }}
          value={innerStatus}
          options={statusOptions}
          onChange={selcetChange}
        />
      </div>
      <div className="bottom-area">
        <Button
          type="primary"
          onClick={showConfirm}
          style={{ marginRight: '20px' }}
        >
          保存
        </Button>
        <Button
          type="primary"
          onClick={() => {
            console.log('重置');
            setInnerStatus(stepsMap.get(status));
          }}
        >
          重置
        </Button>
      </div>
    </StatusWrapper>
  );
};

export default memo(DetailStatus);
