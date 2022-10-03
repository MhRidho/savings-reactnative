import { createSlice } from '@reduxjs/toolkit';
import { login, register, createPin } from '../asyncActions/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  token: '',
  id: '',
  errorMsg: '',
  successMsg: '',
  email: '',
};

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: () => {
      return initialState;
    },
    getEmail: (state, action) => {
      state.email = action.payload;
    },
  },
  extraReducers: build => {
    build.addCase(login.pending, state => {
      state.errorMsg = null;
      state.successMsg = null;
    });
    build.addCase(login.fulfilled, (state, action) => {
      const token = action.payload?.token;
      const id = action.payload?.id;
      if (token) {
        state.token = token;
        state.id = id;
      }
    });
    build.addCase(register.pending, state => {
      state.errorMsg = null;
      state.successMsg = null;
    });
    build.addCase(register.fulfilled, (state, action) => {
      state.errorMsg = action.payload?.error;
      state.successMsg = action.payload?.message;
    });
    build.addCase(createPin.pending, state => {
      state.errorMsg = null;
      state.successMsg = null;
    });
    build.addCase(createPin.fulfilled, (state, action) => {
      state.successMsg = action.payload?.message;
    });
  },
});

export { login };
export const { logout, getEmail } = auth.actions;
export default auth.reducer;
