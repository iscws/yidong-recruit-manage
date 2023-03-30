import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import type { AxiosInstance, AxiosRequestConfig } from 'axios';
import type { eAxiosResponse } from './type';
class Request {
  // axios 实例
  instance: AxiosInstance;

  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);

    this.instance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        if (localStorage.getItem('token') !== null) {
          const token = localStorage.getItem('token') as string;
          config.headers['token'] = `${token}`;
        } else {
          console.log('删除 token 了');
          delete config.headers['Authorization'];
        }
        return config;
      },
      (err: AxiosResponse) => {
        return err;
      }
    );

    this.instance.interceptors.response.use(
      (res) => {
        return res.data;
      },
      (err) => {
        return err;
      }
    );
  }

  request<T = eAxiosResponse>(config: AxiosRequestConfig) {
    return this.instance.request<any, T>(config);
  }
  get(config: AxiosRequestConfig) {
    return this.request({ ...config, method: 'GET' });
  }
  post(config: AxiosRequestConfig) {
    return this.request({ ...config, method: 'POST' });
  }
  delete(config: AxiosRequestConfig) {
    return this.request({ ...config, method: 'DELETE' });
  }
}

export default Request;
