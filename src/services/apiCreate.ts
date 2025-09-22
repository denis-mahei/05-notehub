import axios from 'axios';

const api_token = import.meta.env.VITE_NOTEHUB_TOKEN;

export const api = axios.create({
  baseURL: 'https://notehub-public.goit.study/api',
  headers: {
    Authorization: `Bearer ${api_token}`,
  },
});