import { combineReducers } from '@reduxjs/toolkit';
// import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from './auth';
import profile from './profile';
import transaction from './transaction';

// const authPersist = {
//   key: 'auth',
//   storage: AsyncStorage,
// };

// const persistAuthReducer = persistReducer(authPersist, auth);

const reducer = combineReducers({
  auth,
  profile,
  transaction,
});

export default reducer;
