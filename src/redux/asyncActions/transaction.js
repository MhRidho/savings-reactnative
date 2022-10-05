import { createAsyncThunk } from '@reduxjs/toolkit';
import http from '../../helpers/http';
import qs from 'qs';

export const getHistory = createAsyncThunk(
  'transaction/getHistory',
  async token => {
    const result = {};
    try {
      const { data } = await http(token).get('/auth/historyTransactions');
      return data;
    } catch (error) {
      result.message = error.response.data?.message;
      return result;
    }
  },
);

export const transfer = createAsyncThunk(
  'transaction/transfer',
  async ({ token, request }) => {
    const result = {};
    try {
      const send = qs.stringify(request);
      const { data } = await http(token).post('auth/transfer', send);
      result.successMsg = data.message;
      return result;
    } catch (e) {
      // eslint-disable-next-line no-undef
      result.message = e.response.data?.message;
      return result;
    }
  },
);

export const topup = createAsyncThunk(
  'transaction/topup',
  async ({ token, request }) => {
    const result = {};
    try {
      const send = qs.stringify(request);
      const { data } = await http(token).post('auth/topup', send);
      result.successMsg = data.message;
      return result;
    } catch (e) {
      // eslint-disable-next-line no-undef
      result.message = e.response.data?.message;
      return result;
    }
  },
);
