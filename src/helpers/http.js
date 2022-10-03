import axios from 'axios';
import { API_URL, API_TOKEN } from '@env';

const http = token => {
  const headers = {};
  if (token) {
    headers.authorization = `Bearer ${token}`;
  }
  return axios.create({
    headers,
    baseURL: API_URL,
  });
};

export default http;
