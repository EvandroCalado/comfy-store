import axios from 'axios';

// eslint-disable-next-line react-refresh/only-export-components
export const customFetch = axios.create({
  baseURL: import.meta.env.VITE_STRAPI_URL,
});
