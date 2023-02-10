import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './init.state';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    addNewContactsAction: (state, { payload }) => [...state, payload],
    deleteContactsAction: (state, { payload }) =>
      state.filter(contact => contact.id !== payload),
  },
});
const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState,
  reducers: {
    filterContactsAction: (_, { payload }) => payload,
  },
});
// console.log(contactsSlice);

export const { addNewContactsAction, deleteContactsAction } =
  contactsSlice.actions;

export const { filterContactsAction } = filterSlice.actions;

export const contactsReducer = contactsSlice.reducer;
export const filterReducer = filterSlice.reducer;
