import { configureStore } from '@reduxjs/toolkit';

import searchReducer from '../features/SearchBar/searchSlice';
import marketReducer from '../features/Markets/marketSlice';
import userReducer from '../features/user/userSlice';
export default configureStore({
  reducer: {
    searches: searchReducer,
    markets: marketReducer,
    users: userReducer
  }
});
