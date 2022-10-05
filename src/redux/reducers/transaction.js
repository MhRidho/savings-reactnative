import { createSlice } from "@reduxjs/toolkit";
import { getHistory, topup, transfer } from "../asyncActions/transaction";

const initialState = {
  value: {},
  data: '',
  errorMsg: '',
  successMsg: '',
  fullname: '',
  amount: '',
  user_id: '',
  notes: '',
  time: '',
  type_id: 1,
};

export const transaction = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    resetMsg: state => {
      state.successMsg = null;
      state.errorMsg = null;
    },
    getName: (state, action) => {
      state.fullname = action.payload;
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
    getUserIdTransfer: (state, action) => {
      state.user_id = action.payload;
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
    build.addCase(transfer.pending, state => {
      state.errorMsg = null;
      state.successMsg = null;
    });
    build.addCase(transfer.fulfilled, (state, action) => {
      state.errorMsg = action.payload?.errorMsg;
      state.successMsg = action.payload?.successMsg;
    });
    build.addCase(topup.pending, state => {
      state.errorMsg = null;
      state.successMsg = null;
    });
    build.addCase(topup.fulfilled, (state, action) => {
      state.errorMsg = action.payload?.errorMsg;
      state.successMsg = action.payload?.successMsg;
    });
  },
});

export default transaction.reducer;
export { getHistory, transfer, topup };
export const { getName, getPhone, getAmount, getNotes, getUserIdTransfer, resetMsg } = transaction.actions;
