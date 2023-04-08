import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import type { AxiosInstance, AxiosRequestConfig } from 'axios';
import type { eAxiosResponse } from './type';
import { refleshToken } from '../api';
import { TokenFunc } from '@/type';

// 是否正在刷新的标记
let isRefreshing = false;
// 重试队列，每一项将是一个待执行的函数形式
let requests: TokenFunc[] = [];

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
        // 获取code值
        const { code, message } = response.data;
        // 执行无痛刷新token
        if (code === 500 && message === 'token无效!请重新登录!') {
          const config = response.config;
          if (!isRefreshing) {
            isRefreshing = true;
            return refleshToken()
              .then((res) => {
                const { data: token } = res;
                // 设置token
                localStorage.setItem('token', token);
                console.log('token设置完毕');
                config.headers['token'] = token;

                // 已经刷新了token,将队列里的请求进行重试
                requests.forEach((item) => item(token));
                // 将重试队列置空
                requests = [];
                return this.instance.request(config);
              })
              .catch((res) => {
                // 如果刷新token无效则直接回到登录页面
                console.log('reflashtoken error = >', res);
                window.location.href = '/Login';
              })
              .finally(() => {
                isRefreshing = false;
              });
          } else {
            // 此时代表正在刷新token,返回一个未执行resolve的promise
            return new Promise((resolve) => {
              requests.push((token) => {
                config.headers['token'] = token;
                // 发送请求
                resolve(this.instance.request(config));
              });
            });
          }
        }
        return response.data;
      },
      (err) => {
        return Promise.reject(err);
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
