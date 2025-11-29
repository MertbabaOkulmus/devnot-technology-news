import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.example.com',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false,
});

export default api;
