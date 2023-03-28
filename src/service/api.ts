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
