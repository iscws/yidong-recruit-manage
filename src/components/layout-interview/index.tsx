import React, { memo, useCallback, useEffect, useState } from 'react';
import type { FC, ReactNode } from 'react';
import { userEnrollType } from '@/type';
import { InterviewWrapper } from './style';
import { useNavigate } from 'react-router-dom';
import { getInterviewTime } from '@/service/api';
import { Table, Button, Select } from 'antd';
// import { ColumnsType } from 'antd/es/table';
import Mock from 'mockjs';

interface LayoutInterProps {
  children?: ReactNode;
}

const LayoutInter: FC<LayoutInterProps> = () => {
  const navigate = useNavigate();
  // const params = useParams();
  const [interviewList, setInterviewList] = useState<userEnrollType[]>([]);
  // const [interviewing, setinterviewing] = useState<userEnrollType[]>([]);
  // 获取面试数据
  useEffect(() => {
    getInterviewTime().then((res) => {
      console.log(res);
    });
    // const columns: ColumnsType<userEnrollType> = [
    //   {
    //     title: '名字',
    //     dataIndex: 'username',
    //     key: 'username',
    //     filterMode: 'tree'
    //   },
    //   {
    //     title: '性别',
    //     key: 'sex',
    //     dataIndex: 'sex'
    //   },
    //   {
    //     title: '学号',
    //     key: 'studentId',
    //     dataIndex: 'studentId'
    //   },
    //   {
    //     title: '手机号码',
    //     key: 'phone',
    //     dataIndex: 'phone'
    //   },
    //   {
    //     title: '学院',
    //     key: 'college',
    //     dataIndex: 'college'
    //   },
    //   {
    //     title: '专业',
    //     key: 'major',
    //     dataIndex: 'major'
    //   },
    //   {
    //     title: '状态',
    //     key: 'status',
    //     dataIndex: 'status'
    //   },
    //   {
    //     title: '进入详情',
    //     key: 'index',
    //     render: (record: userEnrollType) => {
    //       return (
    //         <Button onClick={() => toUserDetail(record)} type="primary">
    //           进入详情
    //         </Button>
    //       );
    //     }
    //   }
    // ];
    const mock = Mock.mock({
      'data|20': [
        {
          id: '@natural(1,20)',
          username: '@cname',
          'sex|1-2': 1,
          studentId: '@ID',
          phone: '@integer',
          college: '@ctitle',
          major: '@cword(2,8)',
          introduction: '@cparagraph',
          status: '@ctitle',
          interviewTime: '@ctitle',
          assess: '@boolean'
        }
      ]
    });
    setInterviewList(mock.data);
  }, []);

  // 进入用户详情页
  const toUserDetail = useCallback((record: userEnrollType) => {
    navigate(`/detail/${record.id}`);
  }, []);
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <InterviewWrapper>
      <div className="select-time">
        <div>选择日期：</div>
        <Select
          defaultActiveFirstOption
          style={{ width: 240 }}
          onChange={handleChange}
          options={[
            { value: 1, label: '2023-04-03' },
            { value: 2, label: '2023-04-10' },
            { value: 3, label: '2023-04-11' },
            { value: 4, label: '2023-04-12' }
          ]}
        />
      </div>
      <div className="header">正在面试 Interviewing</div>
      <Table
        pagination={false}
        dataSource={[interviewList[0]]}
        rowKey="studentId"
        onRow={(record) => {
          return {
            onDoubleClick: () => {
              console.log('record:', record);
              toUserDetail(record);
            }
          };
        }}
      />
      <div className="btnbox">
        <Button size="large" className="next-btn" type="primary">
          下一位
        </Button>
      </div>

      <div className="header">待面试队列 Waiting</div>
      <Table
        dataSource={interviewList}
        rowKey="studentId"
        onRow={(record) => {
          return {
            onDoubleClick: () => {
              console.log('record:', record);
              toUserDetail(record);
            }
          };
        }}
      />
    </InterviewWrapper>
  );
};

export default memo(LayoutInter);
