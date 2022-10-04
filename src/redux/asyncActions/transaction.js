import { createAsyncThunk } from '@reduxjs/toolkit';
import http from '../../helpers/http';
import qs from 'qs';

export const getHistory = createAsyncThunk(
  'transaction/getHistory',
  async (token) => {
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
