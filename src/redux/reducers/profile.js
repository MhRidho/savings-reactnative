import { createSlice } from '@reduxjs/toolkit';
import { getProfileLogin, getAllProfiles } from '../asyncActions/profile';

const initialState = {
  value: {},
  data: '',
  errorMsg: '',
  successMsg: '',
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
  },
});

export default profile.reducer;
export { getProfileLogin, getAllProfiles };
export const { resetMsg } = profile.actions;
