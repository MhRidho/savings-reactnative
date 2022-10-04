import { createSlice } from "@reduxjs/toolkit";
import { getHistory } from "../asyncActions/transaction";

const initialState = {
  value: {},
  data: '',
  errorMsg: '',
  successMsg: '',
  name: '',
  amount: '',
  notes: '',
};

export const transaction = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    getName: (state, action) => {
      state.name = action.payload;
    },
    getPhone: (state, action) => {
      state.phone = action.payload;
    },
    getAmount: (state, action) => {
      state.amount = action.payload;
    },
    getNotes: (state, action) => {
      state.notes = action.payload;
    },
    unsetMsg: state => {
      state.errorMsg = null;
      state.successMsg = null;
    },
  },
  extraReducers: build => {
    build.addCase(getHistory.pending, state => {
      state.errorMsg = null;
      state.successMsg = null;
      state.value = {};
    });
    build.addCase(getHistory.fulfilled, (state, action) => {
      state.value = { ...action.payload };
    });
  },
});

export default transaction.reducer;
export { getHistory };
export const { getName, getPhone, getAmount, getNotes } = transaction.actions;
