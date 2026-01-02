import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';
import logger from '@/lib/logger';

const baseURL =
  process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.devnot.com/api';

const instance: AxiosInstance = axios.create({
  baseURL,
  withCredentials: false,
});

function truncate(input: any, max = 1500) {
  if (input == null) return input;
  let s = '';
  try {
    s = typeof input === 'string' ? input : JSON.stringify(input);
  } catch {
    s = String(input);
  }
  return s.length > max ? s.slice(0, max) + '…(truncated)' : s;
}

// Request interceptor: auth token + SSR'de Referer/Origin
instance.interceptors.request.use(
  (config) => {
    // headers yoksa boş bir obje ver, tipiyle uğraşma
    if (!config.headers) {
      config.headers = {} as any;
    }

    // SSR için request başlangıç zamanını tut
    (config as any).metadata = { startTime: Date.now() };

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

      // SSR request log
      logger.info('SSR API REQUEST', {
        method: (config.method || 'GET').toUpperCase(),
        url: config.url,
      });
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor: hata formatını merkezileştirme
instance.interceptors.response.use(
  (response) => {
    if (typeof window === 'undefined') {
      const start = (response.config as any)?.metadata?.startTime;
      const ms = start ? Date.now() - start : undefined;

      logger.info('SSR API RESPONSE', {
        method: (response.config.method || 'GET').toUpperCase(),
        url: response.config.url,
        status: response.status,
        ms,
      });
    }

    return response;
  },
  (error) => {
    const resp = error?.response;

    if (typeof window === 'undefined') {
      const cfg = resp?.config || error?.config;
      const start = cfg?.metadata?.startTime;
      const ms = start ? Date.now() - start : undefined;

      logger.error('SSR API ERROR', {
        method: (cfg?.method || 'GET').toUpperCase(),
        url: cfg?.url,
        status: resp?.status,
        ms,
        data: truncate(resp?.data, 1500),
        message: error?.message,
      });
    }

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