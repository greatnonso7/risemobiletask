import axios from 'axios';
import Config from 'react-native-config';
import { storage } from '../utils/storage';
import { getToken } from 'utils';

const Axios = axios.create({
  baseURL: Config.BASE_URL,
});

console.log(Config, 'Config');

Axios.defaults.headers.post['Content-Type'] = 'application/json';
Axios.defaults.headers.post.Accept = 'application/json';

Axios.interceptors.request.use(async (config: any) => {
  console.log(getToken());
  const token = await storage.getItem('user_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  console.log(config);
  return config;
});

Axios.interceptors.response.use(
  async response => {
    return response;
  },
  async error => {
    const statusCode = error.response ? error.response.status : null;
    const originalRequest = error.config;
    if (statusCode === 401 && !originalRequest._retry) {
      console.log(error.response);
    }
    // console.log(error.response);
    return Promise.reject(error.response);
  },
);

export default Axios;
