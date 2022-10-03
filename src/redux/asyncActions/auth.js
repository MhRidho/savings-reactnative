import { createAsyncThunk } from '@reduxjs/toolkit';
import qs from 'qs';
import http from '../../helpers/http';

export const login = createAsyncThunk('/auth/login', async request => {
  const result = {};
  try {
    const send = qs.stringify(request);
    const { data } = await http().post('/auth/login', send);
    // eslint-disable-next-line no-const-assign
    result.token = data.results.token;
    result.message = data.message;
    return result;
  } catch (e) {
    result.errorMsg = e.response.data?.message;
    return result;
  }
});

export const register = createAsyncThunk('/auth/register', async request => {
  const result = {};
  try {
    const send = qs.stringify(request);
    const { data } = await http().post('/auth/register', send);
    // eslint-disable-next-line no-const-assign
    result.data = data.results;
    result.message = data.message;
    return result;
  } catch (error) {
    // eslint-disable-next-line no-undef
    result.error = e.response.data.results[0].msg;
    return result;
  }
});

export const createPin = createAsyncThunk('/auth/createPin', async request => {
  const result = {};
  try {
    const send = qs.stringify(request);
    const { data } = await http().post('/auth/createPin', send);
    result.data = data.results;
    result.message = data.message;
    return result;
  } catch (error) {
    return error;
  }
});
