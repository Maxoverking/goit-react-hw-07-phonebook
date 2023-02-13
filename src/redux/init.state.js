import { STATUS } from 'components/Status/costants.status';
// import initState from '../contactsData/contacts.json';

export const initialStateContacts = {
  items: [],
  isLoading: STATUS.idle,
  error: null,
};
export const filterInitialState = '';

export const initialState = {
  contacts: initialStateContacts,
  filter: filterInitialState,
};
