import axios, {AxiosRequestConfig, AxiosInstance, AxiosResponse} from 'axios';
import {SUPABASE_PUBLIC_KEY, SUPABASE_URL} from '@env';
import Storage from '../common/storage';

const headers: Readonly<Record<string, string | boolean>> = {
  Accept: 'application/json',
  'Content-Type': 'application/json; charset=utf-8',
  'Access-Control-Allow-Credentials': true,
  'X-Requested-With': 'XMLHttpRequest',
  apikey: SUPABASE_PUBLIC_KEY,
};

class Http {
  private instance: AxiosInstance | null = null;

  private get http(): AxiosInstance {
    return this.instance != null ? this.instance : this.initHttp();
  }

  initHttp(): AxiosInstance {
    const http = axios.create({
      baseURL: `${SUPABASE_URL}/rest/v1`,
      headers,
    });

    http.interceptors.request.use(
      async config => {
        const access_token = await Storage.getAccessToken();
        config.headers = {
          Authorization: `Bearer ${access_token}`,
        };
        return config;
      },
      error => Promise.reject(error),
    );

    http.interceptors.response.use(
      response => response,
      async error => {
        const config = error?.config;

        if (error?.response?.status === 401 && !config?.sent) {
          // TODO: Logout flow
        }
      },
    );

    this.instance = http;

    return http;
  }

  request<T = any, R = AxiosResponse<T>>(
    config: AxiosRequestConfig,
  ): Promise<R> {
    return this.http.request(config);
  }

  get<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    return this.http.get<T, R>(url, config);
  }

  post<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    return this.http.post<T, R>(url, data, config);
  }

  put<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    return this.http.put<T, R>(url, data, config);
  }

  delete<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    return this.http.delete<T, R>(url, config);
  }
}

export const http = new Http();
