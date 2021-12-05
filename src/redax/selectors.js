export const getContacts = (state) => state.phonebook.contacts;
export const getFilter = (state) => state.phonebook.filter;

export const visibleContacts = (state) => {
  const contacts = getContacts(state);
  const filter = getFilter(state);
  console.log(filter);
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );
};
