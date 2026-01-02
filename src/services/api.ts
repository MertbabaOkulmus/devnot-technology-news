import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';

const baseURL =
  process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.devnot.com/api';

const instance: AxiosInstance = axios.create({
  baseURL,
  withCredentials: false,
});

// Request interceptor: auth token + SSR'de Referer/Origin
instance.interceptors.request.use(
  (config) => {
    // headers yoksa boş bir obje ver, tipiyle uğraşma
    if (!config.headers) {
      config.headers = {} as any;
    }

    // Bundan sonrası için headers'ı gevşek tipte kullanıyoruz
    const headers = config.headers as any;
    // Cache kontrolü 
    headers['Cache-Control'] = 'no-store, no-cache, must-revalidate, max-age=0';
    headers['Pragma'] = 'no-cache';
    headers['Expires'] = '0';

    // Ortak Content-Type
    if (!headers['Content-Type']) {
      headers['Content-Type'] = 'application/json';
    }

    if (typeof window !== 'undefined') {
      // ---- CLIENT SIDE ----
      try {
        const token = localStorage.getItem('token');
        if (token) {
          headers['Authorization'] = `Bearer ${token}`;
        }
      } catch {
        // storage hatalarını yut
      }
    } else {
      // ---- SERVER SIDE (SSR / API routes) ----
      const appUrl =
        process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

      // Devnot API'nin istediği header'lar:
      if (!headers['Referer']) {
        headers['Referer'] = `${appUrl}/`;
      }
      if (!headers['Origin']) {
        headers['Origin'] = appUrl;
      }
      if (!headers['Accept']) {
        headers['Accept'] = 'application/json, text/plain, */*';
      }
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor: hata formatını merkezileştirme
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    const resp = error?.response;
    if (resp && resp.data) {
      return Promise.reject(resp.data);
    }
    return Promise.reject(error);
  }
);

// Generic request helper
const request = <T = any>(config: AxiosRequestConfig): Promise<T> =>
  instance.request<T>(config).then((res: AxiosResponse<T>) => res.data);

// HTTP helper'lar
const get = <T = any>(
  url: string,
  config?: AxiosRequestConfig
): Promise<T> => request<T>({ ...(config || {}), method: 'GET', url });

const post = <T = any>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<T> =>
  request<T>({ ...(config || {}), method: 'POST', url, data });

const put = <T = any>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<T> =>
  request<T>({ ...(config || {}), method: 'PUT', url, data });

const del = <T = any>(
  url: string,
  config?: AxiosRequestConfig
): Promise<T> =>
  request<T>({ ...(config || {}), method: 'DELETE', url });

export { instance as axiosInstance, request, get, post, put, del };
export default instance;