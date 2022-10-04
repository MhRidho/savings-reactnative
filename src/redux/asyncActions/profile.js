import { createAsyncThunk } from '@reduxjs/toolkit';
import http from '../../helpers/http';
import qs from 'qs';

export const getProfileLogin = createAsyncThunk(
  'profile/getProfileLogin',
  async token => {
    const result = {};
    try {
      const { data } = await http(token).get('auth/profiles');
      result.data = data.results;
      result.message = data.message;
      return result;
    } catch (e) {
      return e;
    }
  },
);
