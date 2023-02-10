// import { contactsReducer, filterReducer } from './reducer';// было
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { initialState } from './init.state';
import { contactsReducer, filterReducer } from './contacts.slice';
// import './contacts.slice';

const persistConfig = {
  key: 'myContactsList',
  storage,
  whitelist: ['contacts'],
  // blacklist: ['filters'],
};

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filterReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  preloadedState: initialState, //начальний стейт
  devTools: true, //включаем toolзи
  reducer: persistedReducer, //добавляем редюсер
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// import { CONTACT, DELETE_CONTACT, FILTER } from './constants';

// const initialState = {
//   contacts: contactsData,
//   filters: '',
// };

// const contactsReducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case CONTACT:
//       return [...state, payload];
//     case DELETE_CONTACT:
//       return state.filter(contact => contact.id !== payload);

//     default:
//       return state;
//   }
// };
// const filterReducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case FILTER:
//       return payload;
//     default:
//       return state;
//   }
// };
