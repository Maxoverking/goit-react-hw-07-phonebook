// import { createReducer } from '@reduxjs/toolkit';
// import {
//   addNewContactsAction,
//   deleteContactsAction,
//   filterContactsAction,
// } from './actions';
// import { initialState } from './init.state';

// export const contactsReducer = createReducer(initialState, builder => {
//   builder
//     .addCase(addNewContactsAction, (state, { payload }) => [...state, payload])
//     .addCase(deleteContactsAction, (state, { payload }) =>
//       state.filter(contact => contact.id !== payload)
//     );
// });

// export const filterReducer = createReducer(initialState, builder => {
//   builder.addCase(filterContactsAction, (_, { payload }) => payload);
// });

// export const filterReducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case FILTER:
//       return payload;
//     default:
//       return state;
//   }
// };

// export const contactsReducer = (state = initialState,
//   { type, payload }) => {
//   switch (type) {
//     case CONTACT:
//       return [...state, payload];
//     case DELETE_CONTACT:
//       return state.filter(contact => contact.id !== payload);

//     default:
//       return state;
//   }
// };
