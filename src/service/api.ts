import { interviewTime, LoginProps, searchUserType } from '@/type';
import request from '.';

export function login(props: LoginProps) {
  return request.post({
    url: '/api/admin/login/pw',
    params: props
  });
}

// 获取报名情况
export function getEnrollData(direction: string) {
  return request.get({
    url: `/api/admin/orderBy/${direction}`
  });
}

export function getSearchData(params: searchUserType) {
  return request.get({
    url: `/api/admin/getUserInfoByName?username=${params.username}`
  });
}

// 获取面试时间
export function getInterviewTime() {
  return request.get({
    url: '/api/admin/getAllTime'
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
export function updateInterviewInfo(props: interviewTime) {
  return request.post({
    url: '/api/admin/updateTime',
    data: props
  });
}

// 新增面试时间
export function addNewInterview(props: interviewTime) {
  return request.post({
    url: '/api/admin/addTime',
    data: props
  });
}

// 删除面试时间
export function deleteInterviewTime(id: number) {
  return request.get({
    url: `/api/admin/deleteTime/${id}`
  });
}

// 获取某个用户的基本信息
export function getUserInfoById(id: number) {
  return request.get({
    url: '/api/admin/getUserInfoById',
    data: id
  });
}
