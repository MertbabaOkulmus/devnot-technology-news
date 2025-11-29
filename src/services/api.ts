import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';

const baseURL =
  process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.example.com';

// Ortak default header'lar
const defaultHeaders: Record<string, string> = {
  'Content-Type': 'application/json',
};

// Sadece server-side için Referer ekleyelim (curl'da işe yarayan değerle aynı mantık)
if (typeof window === 'undefined') {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000/';
  defaultHeaders['Referer'] = appUrl;
}

const instance: AxiosInstance = axios.create({
  baseURL,
  headers: defaultHeaders,
  withCredentials: false,
});

// Request interceptor: auth token + SSR'de Referer
instance.interceptors.request.use(
  (config) => {
    try {
      if (typeof window !== 'undefined') {
        // Client-side: localStorage'dan token ekle
        const token = localStorage.getItem('token');
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
      } else {
        // Server-side: Referer header'ını garantiye al
        const appUrl =
          process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000/';

        if (!config.headers.Referer) {
          config.headers.Referer = appUrl;
        }
      }
    } catch {
      // storage hatalarını yut
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
