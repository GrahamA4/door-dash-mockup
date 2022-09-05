import { configureStore } from '@reduxjs/toolkit';

import searchReducer from '../features/SearchBar/searchSlice';
import marketReducer from '../features/Markets/marketSlice';

export default configureStore({
  reducer: {
    searches: searchReducer,
    markets: marketReducer
  }
});
