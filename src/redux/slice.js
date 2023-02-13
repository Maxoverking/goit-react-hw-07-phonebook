// import { createSlice } from '@reduxjs/toolkit';
// import { filterInitialState, initialStateContacts } from './init.state';

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: initialStateContacts,
//   reducers: {
//     addNewContactsAction: (state, { payload }) => ({
//       ...state,
//       items: [...state.items, payload],
//     }),
//     deleteContactsAction: (state, { payload }) => ({
//       ...state,
//       items: state.items.filter(contact => contact.id !== payload),
//     }),
//   },
// });
// const filterSlice = createSlice({
//   name: 'filter',
//   initialState: filterInitialState,
//   reducers: {
//     filterContactsAction: (_, { payload }) => payload,
//   },
// });
// // console.log(contactsSlice);
// export const contactsReducer = contactsSlice.reducer;
// export const filterReducer = filterSlice.reducer;

// export const { addNewContactsAction, deleteContactsAction } =
//   contactsSlice.actions;

// export const { filterContactsAction } = filterSlice.actions;
