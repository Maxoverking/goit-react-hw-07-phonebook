export const addNewContacts = state => {
  return state.contacts.items;
};
export const isLoadingContacts = state => {
  return state.contacts.isLoading;
};
export const errorContacts = state => {
  return state.contacts.error;
};

export const getFilteredContacts = state => {
  return state.filter;
};
