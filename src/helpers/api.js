import axios from 'axios';

import { isAuthenticated, removeToken } from './auth';
import { history } from '~/routes';

const bearerToken = () => {
  const token = isAuthenticated();
  return token ? `Bearer ${token}` : null;
};

const requestConfig = (config) => {
  config.headers.Authorization = bearerToken();
  return config;
};

const successResponse = (response) => response.data;

const errorResponse = (error) => {
  if (error.response.status === 401) {
    removeToken();
    history.push('/login');
  }

  throw error;
};

export default (service) => {
  const api = axios.create({ baseURL: `/api/${service}` });

  api.interceptors.request.use(requestConfig);
  api.interceptors.response.use(successResponse, errorResponse);

  return api;
};
