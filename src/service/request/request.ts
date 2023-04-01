import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import type { AxiosInstance, AxiosRequestConfig } from 'axios';
import type { eAxiosResponse } from './type';
import { refreshToken } from '../api';

// 是否正在刷新的标记
let isRefreshing = false;
// 重试队列，每一项将是一个待执行的函数形式
let requests: any[] = [];

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
      (response) => {
        if (response.data.code === 500) {
          const config = response.config;
          if (!isRefreshing) {
            isRefreshing = true;
            return refreshToken()
              .then((res) => {
                const token = res;
                window.localStorage.setItem('token', token);
                config.headers['token'] = token;
                config.baseURL = '';
                // 已经刷新了token，将所有队列中的请求进行重试
                requests.forEach((cb) => cb(token));
                requests = [];
                return this.instance(config);
              })
              .finally(() => {
                isRefreshing = false;
              });
          } else {
            // 正在刷新token，将返回一个未执行resolve的promise
            return new Promise((resolve) => {
              // 将resolve放进队列，用一个函数形式来保存，等token刷新后直接执行
              requests.push((token: any) => {
                config.baseURL = '';
                config.headers['token'] = token;
                resolve(this.instance(config));
              });
            });
          }
        }
        return response.data;
      },
      (err) => {
        return err;
      }
    );
  }

  request<T = eAxiosResponse>(config: AxiosRequestConfig) {
    return this.instance.request<any, T>(config);
  }
  get<T = eAxiosResponse>(config: AxiosRequestConfig) {
    return this.request<T>({ ...config, method: 'GET' });
  }
  post<T = eAxiosResponse>(config: AxiosRequestConfig) {
    return this.request<T>({ ...config, method: 'POST' });
  }
  delete<T = eAxiosResponse>(config: AxiosRequestConfig) {
    return this.request<T>({ ...config, method: 'DELETE' });
  }
}

export default Request;
