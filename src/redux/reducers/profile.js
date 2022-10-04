import { createSlice } from '@reduxjs/toolkit';
import { getProfileLogin } from '../asyncActions/profile';

const initialState = {
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
  },
});

export default profile.reducer;
export { getProfileLogin };
export const { resetMsg } = profile.actions;
