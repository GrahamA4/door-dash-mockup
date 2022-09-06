import { createSlice } from '@reduxjs/toolkit';

const initialState = ['test'];

const searchSlice = createSlice({
  name: 'searches',
  initialState,
  reducers: {
    searchAdded(state, action) {
      state.push(action.payload);
    }
  }
});

export const { searchAdded } = searchSlice.actions;

export default searchSlice.reducer;
