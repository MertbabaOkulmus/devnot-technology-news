import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

const instance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.example.com',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false,
});

// Request interceptor: attach auth token when available
instance.interceptors.request.use(
  (config) => {
    try {
      if (typeof window !== 'undefined') {
        const token = localStorage.getItem('token');
        if (token && config.headers) {
          config.headers.Authorization = `Bearer ${token}`;
        }
      }
    } catch (e) {
      // ignore storage errors
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor: centralize error shape
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    const resp = error?.response;
    if (resp && resp.data) return Promise.reject(resp.data);
    return Promise.reject(error);
  }
);

const request = <T = any>(config: AxiosRequestConfig) =>
  instance.request<T>(config).then((res: AxiosResponse<T>) => res.data);

const get = <T = any>(url: string, config?: AxiosRequestConfig) =>
  request<T>({ ...(config || {}), method: 'GET', url });

const post = <T = any>(url: string, data?: any, config?: AxiosRequestConfig) =>
  request<T>({ ...(config || {}), method: 'POST', url, data });

const put = <T = any>(url: string, data?: any, config?: AxiosRequestConfig) =>
  request<T>({ ...(config || {}), method: 'PUT', url, data });

const del = <T = any>(url: string, config?: AxiosRequestConfig) =>
  request<T>({ ...(config || {}), method: 'DELETE', url });

export { instance as axiosInstance, request, get, post, put, del };
export default instance;
