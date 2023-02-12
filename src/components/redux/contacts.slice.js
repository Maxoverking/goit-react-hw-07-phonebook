import { createSlice } from '@reduxjs/toolkit';
import { STATUS } from 'components/Status/costants.status';
import { initialStateContacts } from './init.state';
import {
  getContacts,
  // addContacts,
  // deleteContacts
} from './operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialStateContacts,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getContacts.pending, state => {
        state.isLoading = STATUS.loading;
      })
      .addCase(getContacts.fulfilled, (state, { payload }) => {
        state.isLoading = STATUS.success;
        state.items = payload;
      })
      .addCase(getContacts.rejected, state => {
        state.error = STATUS.error;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;

// Скоро не будет работать этот метод
// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: initialStateContacts,
//   reducers: {},
//   extraReducers: {
//     [getContacts.pending]: state => {
//       state.isLoading = STATUS.loading;
//     },
//     [getContacts.fulfilled]: (state, { payload }) => {
//       state.isLoading = STATUS.success;
//       state.items = payload;
//     },
//     [getContacts.rejected]: state => {
//       state.error = STATUS.error;
//     },
//   },
// });
