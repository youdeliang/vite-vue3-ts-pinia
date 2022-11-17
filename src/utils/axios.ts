import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const service = axios.create();

service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config;
  },
  (error: any) => {
    Promise.reject(error);
  }
);

service.interceptors.response.use(
  async (response: AxiosResponse) => {
    return response;
  },
  (error: any) => {
    Promise.reject(error);
  }
);

export default service;
