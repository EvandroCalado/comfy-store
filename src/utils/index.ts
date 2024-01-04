import axios from 'axios';

export const customAxios = axios.create({
  baseURL: import.meta.env.VITE_STRAPI_URL,
});
