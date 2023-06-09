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
  quota?: number;
  location: string;
  spareQuota?: number;
  created?: boolean;
  direction?: number;
}

// 点击搜索后返回的对象
export interface searchType {
  username: string;
}

// 面试时间
export interface itemConfigType {
  innerData: interviewTime;
  isAppoint: boolean;
  created: boolean;
  isDelete: boolean;
}

// 定义窗口大小的接口类型
export interface WindowSize {
  width: number;
}
