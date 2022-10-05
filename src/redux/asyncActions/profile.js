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

export const getAllProfiles = createAsyncThunk(
  'profile/getAllProfiles',
  async ({ token, limit, page }) => {
    const result = {};
    limit = parseInt(limit) || 5;
    page = parseInt(page) || 1;
    const query = new URLSearchParams({ limit, page }).toString();
    try {
      const { data } = await http(token).get('/admin/profiles?' + query);
      return data;
    } catch (e) {
      result.message = e.response.data?.message;
      return result;
    }
  },
);

export const updateProfile = createAsyncThunk(
  'profile/updateProfile',
  async ({ token, request }) => {
    const result = {};
    try {
      const send = qs.stringify(request);
      const { data } = await http(token).patch('/auth/profile', send);
      result.successMsg = data.message;
      return result;
    } catch (e) {
      result.message = e.response.data?.message;
      return result;
    }
  },
);
