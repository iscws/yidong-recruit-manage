import erequest from '.';

type LoginProps = {
  username: string;
  password: string;
  remember?: boolean;
};

export function login(props: LoginProps) {
  return erequest.post({
    url: '/api/admin/login/pw',
    params: props
  });
}

// 获取报名情况
export function getEnrollData(direction: number) {
  return erequest.get({
    url: `/api/admin/orderBy/${direction}`
  });
}
