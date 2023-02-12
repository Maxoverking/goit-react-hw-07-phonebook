// import { contactsReducer, filterReducer } from './redusers';
import { initialState } from './init.state';
import {
  // combineReducers,
  // createStore,
  // applyMiddleware,
  configureStore,
} from '@reduxjs/toolkit';
import {
  // persistStore,
  // persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { contactsReducer } from './contacts.slice';
import { filterReducer } from './filter.slice';

export const store = configureStore({
  preloadedState: initialState,
  devTools: true,
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
// });

// const post = async dispatch => {
//   dispatch({ type: 'LOading...' });
//   try {
//     const { data } = await axios.get(
//       'https://63bb362a32d17a50908a3770.mockapi.io/contacts'
//     );
//     console.log('🚀  dataRes', data);
//     dispatch({ type: 'STOP_LOADING' });
//   } catch (error) {
//     console.log(error);
//     dispatch({ type: 'ERROR' });
//   }
// };

// const myMiddleware = store => next => action => {
//   console.log('🚀  store', store.getState());
//   console.log('🚀  action', action);
//   next(action);
// };
// const myThunk = store => next => action => {
//   if (typeof action === 'function') {
//     action(store.dispatch);
//     return;
//   }
//   next(action);
// };

// export const store = createStore(
//   rootReducer,
//   initialState,
//   composeWithDevTools(applyMiddleware(myMiddleware, myThunk))
// );

// export const store = configureStore({
//   preloadedState: initialState,
//   devTools: true,
//   reducer: {
//     contacts: contactsReducer,
//     filter: filterReducer,
//   },
// });

//Потом можно импортировать
