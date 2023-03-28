import type { AxiosResponse } from 'axios';

// 在这里自定义axios返回的数据类型
export interface eAxiosResponse extends AxiosResponse {
  code: number;
  data: any;
  message: string;
}
