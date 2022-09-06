import { createSlice } from '@reduxjs/toolkit';
import { login } from '../asyncActions/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';


const initialState = {
  token: AsyncStorage.getItem('token') || null,
  errorMsg: null,
  successMsg: null,
};

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: state => {
      AsyncStorage.removeItem('token');
      return initialState;
    },
  },
  extraReducers: build => {
    build.addCase(login.pending, state => {
      state.errorMsg = null;
      state.successMsg = null;
    });
    build.addCase(login.fulfilled, (state, action) => {
      const token = action.payload?.token;
      if (token) {
        state.token = token;
        AsyncStorage.setItem('token', token);
      } else {
        state.errorMsg = action.payload?.errorMsg;
        state.successMsg = action.payload?.successMsg;
      }
    });
  },
});

export { login };
export const { logout } = auth.actions;
export default auth.reducer;
