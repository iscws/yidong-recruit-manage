import { ColumnsType } from 'antd/es/table';

export interface userEnrollType {
  id: string;
  username: number;
  sex: string;
  studentId: string;
  phone: number;
  college: string;
  major: string;
  introduction: string;
  status: string;
}

// 定义传递过来的数据类型
export interface infoDataType {
  type: 'enroll' | 'interview' | 'edit';
  direction: number;
}

// 登录数据
export type LoginProps = {
  username: string;
  password: string;
  remember?: boolean;
};

export const columns: ColumnsType<userEnrollType> = [
  {
    title: '名字',
    dataIndex: 'username',
    key: 'username'
  },
  {
    title: '性别',
    key: 'sex',
    dataIndex: 'sex'
  },
  {
    title: '学号',
    key: 'studentId',
    dataIndex: 'studentId'
  },
  {
    title: '手机号码',
    key: 'phone',
    dataIndex: 'phone'
  },
  {
    title: '学院',
    key: 'college',
    dataIndex: 'college'
  },
  {
    title: '专业',
    key: 'major',
    dataIndex: 'major'
  },
  {
    title: '状态',
    key: 'status',
    dataIndex: 'status'
  }
];

export interface searchUserType {
  username: string;
}

export interface interviewTime {
  id?: number;
  start: string;
  end: string;
  totalQuota: string;
  location: string;
  subscribed?: boolean;
}

// 点击搜索后返回的对象
export interface searchType {
  username: string;
}
