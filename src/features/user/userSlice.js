import { createSlice } from '@reduxjs/toolkit';

let initialState = [{ id: '1', uname: 'abe' }];

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {}
});

export default userSlice.reducer;
