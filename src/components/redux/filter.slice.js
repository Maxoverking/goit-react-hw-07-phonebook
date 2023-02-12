import { createSlice } from '@reduxjs/toolkit';
import { filterInitialState } from './init.state';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    filterContactsAction: (_, { payload }) => payload,
  },
});
export const filterReducer = filterSlice.reducer;
export const { filterContactsAction } = filterSlice.actions;
