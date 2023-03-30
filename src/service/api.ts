import { LoginProps } from '@/type/user';
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
