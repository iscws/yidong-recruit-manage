import { LoginProps, searchUserType } from '@/type';
import request from '.';

export function login(props: LoginProps) {
  return request.post({
    url: '/api/admin/login/pw',
    params: props
  });
}

// 获取报名情况
export function getEnrollData(direction: number) {
  return request.get({
    url: `/api/admin/orderBy/${direction}`
  });
}

export function getSearchData(params: searchUserType) {
  return request.post({
    url: '/api/user/getUserInfoByName',
    data: params
  });
}

// 获取面试时间
export function getInterviewTime() {
  return request.get({
    url: '/api/recruit/interview/odMgR5mbEDwXPo-FQ4aB1xvphM1s'
  });
}

export async function refreshToken() {
  const username = window.localStorage.getItem('username') as string;
  const password = window.localStorage.getItem('password') as string;

  return login({ username, password }).then((res) => {
    return res.data;
  });
}

// 更改面试基本信息
export function updateInterviewInfo(props: any) {
  return request.post({
    url: '/api/admin/updateTime',
    data: props
  });
}
