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
// 根据方向获取面试时间
export function getInterviewTimeDirec(direction: number) {
  return request.get({
    url: `/api/admin/getAllTimeByDir/${direction}`
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
  return request.put({
    url: '/api/admin/interview',
    data: props
  });
}

// 新增面试时间
export function addNewInterview(props: interviewTime) {
  return request.post({
    url: '/api/admin/interview',
    data: props
  });
}

// 删除面试时间
export function deleteInterviewTime(id: number) {
  return request.delete({
    url: `/api/admin/interview/${id}`
  });
}

// 获取某个用户的基本信息
export function getUserInfoById(id: number) {
  return request.get({
    url: `/api/admin/getUserInfoById`,
    params: { id }
  });
}

export function refleshToken() {
  const username = localStorage.getItem('username');
  const password = localStorage.getItem('password');

  return request.post({
    url: '/api/admin/login/pw',
    params: {
      username,
      password
    }
  });
}

// 查询当前面试时间是否有被预约`
export function getAppointSec(id: number) {
  return request.get({
    url: `/api/admin/ifSec/${id}`
  });
}

// 查询多少分钟之前能预约
export function getPreRecruitTime() {
  return request.get({
    url: `/api/admin/getPreRecruitTime`
  });
}

/**
 * 更改多少分钟之前能预约
 * @param time 输入时间
 */
export function editPreRecruitTime(time: number) {
  return request.put({
    url: `/api/admin/changeRecruitTime/${time}`
  });
}

// 获取该面试时间的信息
export function getRecruitTimeInfo(id: number) {
  return request.get({
    url: `/api/admin/getThisTime/${id}`
  });
}

// 填写用户的评价
export function setUserAssess(id: number, assess: string) {
  return request.put({
    url: `/api/admin/setAssess/${id}`,
    params: {
      assess
    }
  });
}
/**
 *  获取当前面试时间的面试情况
 * @param  id 面试时间id
 */

export function getIsInterviewByid(id: number) {
  return request.get({
    url: `/api/admin/getNow/${id}`
  });
}

/**
 * 将下一位排队者改为面试中
 * @param  id 面试时间
 */
export function nextInterview(id: number) {
  return request.get({
    url: `/api/admin/getNext/${id}`
  });
}

/**
 *发送消息提醒面试
 * @param  id 用户id
 */
export function pushInterview(id: number) {
  return request.post({
    url: `/api/admin/push/interview/${id}`
  });
}

/**
 * 修改用户状态
 * @param id 用户id
 * @param status 需要修改的用户状态
 * @returns
 */
export function setUserStatus(id: number, status: number) {
  return request.put({
    url: `/api/admin/setStatus/${id}/${status}`
  });
}
/**
 *
 * @param isDisplay 是否展示报名页
 * @param message 报名页返回内容
 */
export function changeDisplay(isDisplay: boolean, message = '暂不支持报名') {
  return request.put({
    url: `/api/admin/page/display`,
    data: {
      isDisplay,
      message
    }
  });
}

export function getDisplay() {
  return request.get({
    url: `/api/recruit/display`
  });
}
