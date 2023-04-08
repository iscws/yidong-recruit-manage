import { MenuProps } from 'antd';
export interface userEnrollType {
  id: number;
  username: string;
  sex: string;
  studentId: string;
  phone: number;
  college: string;
  major: string;
  introduction: string;
  status: string;
  interviewTime?: interviewTime;
  assess?: string;
  direction?: string;
}

export type TokenFunc = (token: string) => void;

export type MenuItemType = Required<MenuProps>['items'][number];
export interface MenuType {
  type: 'enroll' | 'interview' | 'edit';
}
// 登录数据
export type LoginProps = {
  username: string;
  password: string;
  remember?: boolean;
};

export interface searchUserType {
  username: string;
}

export interface interviewTime {
  id?: number | string;
  startTime: string;
  endTime: string;
  quota?: string;
  location: string;
  spareQuota?: number;
  isdefalut?: boolean;
  direction?: number;
}

// 点击搜索后返回的对象
export interface searchType {
  username: string;
}
