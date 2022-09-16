import { createAsyncThunk } from '@reduxjs/toolkit';
import qs from 'qs';
import http from '../../helpers/http';

export const login = createAsyncThunk('/auth/login', async request => {
  const result = {};
  try {
    const send = qs.stringify(request);
    const { data } = await http().post('/auth/login', send);
    result = data.results;
    return result;
  } catch (e) {
    result.errorMsg = e.response.data.message;
    return result;
  }
});
