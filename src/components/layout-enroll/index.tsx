import React, { memo, useState, useEffect } from 'react';
import type { FC, ReactNode } from 'react';
import { searchType, userEnrollType } from '@/type';
import { Button, Form, Input, message, Switch } from 'antd';
import { useParams } from 'react-router-dom';
import { EnrollWrapper } from './style';
import {
  changeDisplay,
  getDisplay,
  getEnrollData,
  getSearchData
} from '@/service/api';
import { useThrottle } from '@/hooks/useThrottle';
import HomeTable from '../home-table';
import { check } from 'prettier';

interface LayoutEnrollProps {
  children?: ReactNode;
}

const LayoutEnroll: FC<LayoutEnrollProps> = () => {
  const [infoData, setInfoData] = useState<userEnrollType[]>([]);
  const [switchCheck, setSwitchCheck] = useState(false);
  const params = useParams();

  const switchChange = (checked: any, event: any) => {
    console.log(checked, event);
    changeDisplay(checked).then((res) => {
      res.code === 200 && setSwitchCheck(checked);
      console.log(res);
    });
  };

  // 搜索
  const searchFinish = useThrottle((value: searchType) => {
    console.log(value);

    if (value.username === undefined || value.username === '') {
      reflashData();
      return;
    }
    getSearchData(value).then((res) => {
      if (res.code === 200 && res.data !== null) {
        setInfoData([res.data]);
        message.success(res.message);
      } else {
        setInfoData([]);
        message.error(res.message + ',请输入全名');
      }
    });
  }, 1000);

  // 更新数据
  useEffect(() => {
    reflashData();
    getDisplay().then((res) => {
      res.code === 200 && setSwitchCheck(res.data.isDisplay);
      console.log(res);
    });
  }, [params]);

  const reflashData = () => {
    getEnrollData(params.direction as string).then((res) => {
      setInfoData(res.data);
    });
  };
  return (
    <EnrollWrapper>
      <div className="area">
        <div className="search">
          <Form className="search-form" onFinish={searchFinish}>
            <Form.Item name="username">
              <Input placeholder="请输入完整的姓名"></Input>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="submit-btn">
                搜索
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className="switch">
          是否开启报名：
          <Switch
            checkedChildren="开启"
            unCheckedChildren="关闭"
            checked={switchCheck}
            onChange={switchChange}
          />
        </div>
        <div className="btn">
          <Button onClick={reflashData}>刷新数据</Button>
        </div>
      </div>
      <HomeTable infoData={infoData} />
    </EnrollWrapper>
  );
};

export default memo(LayoutEnroll);
