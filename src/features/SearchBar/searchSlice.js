import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const searchSlice = createSlice({
  name: 'searches',
  initialState,
  reducers: {
    searchResult: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content) {
        return {
          payload: {
            title,
            content
          }
        };
      }
    }
  }
});

export const { searchResult } = searchSlice.actions;

export default searchSlice.reducer;
