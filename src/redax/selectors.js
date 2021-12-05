export const getContacts = (state) => state.phonebook.contacts;
export const getFilter = (state) => state.phonebook.filter;
export const getContactId = (state) => console.log(state.phonebook.contacts.id);

export const visibleContacts = (state) => {
  const contacts = getContacts(state);
  const filter = getFilter(state);
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );
};
