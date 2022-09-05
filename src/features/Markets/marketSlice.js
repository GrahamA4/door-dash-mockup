import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: '1',
    title: 'McDonalds',
    content: 'We have Burgers!'
  },
  {
    id: '2',
    title: 'Bagels',
    content: 'We have Baked goods'
  }
];

const marketSlice = createSlice({
  name: 'markets',
  initialState,
  reducers: {
    marketAdded(state, action) {
      state.push(action.payload);
    }
  }
});

export const { marketAdded } = marketSlice.actions;

export default marketSlice.reducer;
