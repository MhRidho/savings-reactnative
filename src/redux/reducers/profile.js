import { createSlice } from '@reduxjs/toolkit';
import { getProfileLogin, getAllProfiles, updateProfile, uploadFoto } from '../asyncActions/profile';

const initialState = {
  value: {},
  data: '',
  errorMsg: '',
  successMsg: '',
  page: '',
};

export const profile = createSlice({
  name: 'profile',
  initialState,
  // eslint-disable-next-line no-undef
  reducers: {
    resetMsg: state => {
      state.successMsg = null;
      state.errorMsg = null;
    },
  },
  extraReducers: build => {
    build.addCase(getProfileLogin.pending, state => {
      state.errorMsg = null;
      state.successMsg = null;
    });
    build.addCase(getProfileLogin.fulfilled, (state, action) => {
      const data = action.payload?.data;
      if (data) {
        state.data = data;
      }
    });
    build.addCase(getAllProfiles.pending, state => {
      state.value = {};
    });
    build.addCase(getAllProfiles.fulfilled, (state, action) => {
      state.value = { ...action.payload };
    });
    build.addCase(updateProfile.pending, state => {
      state.data = null;
      state.successMsg = null;
    });
    build.addCase(updateProfile.fulfilled, (state, action) => {
      state.data = action.payload.results;
      state.successMsg = action.payload?.successMsg;
    });
    build.addCase(uploadFoto.pending, state => {
      state.errorMsg = null;
      state.successMsg = null;
    });
    build.addCase(uploadFoto.fulfilled, (state, action) => {
      const successMsg = action.payload?.message;
      if (successMsg) {
        state.successMsg = successMsg;
      }
    });
  },
});

export default profile.reducer;
export { getProfileLogin, getAllProfiles, updateProfile, uploadFoto };
export const { resetMsg } = profile.actions;
