export const getContacts = (state) => state.contacts.contacts;
export const getFilter = (state) => state.contacts.filter;

export const visibleContacts = (state) => {
  // console.log('Весь стейт внутри visibleContacts:', state);
  const contacts = getContacts(state);
  const filter = getFilter(state);
  // console.log("Фильтр внутри visibleContacts:", filter);
  // console.log("Контакты внутри visibleContacts:", contacts );
  const normalizedFilter = filter.toLowerCase();
  // console.log("Контакты перед фильтром:", contacts);
  return contacts.filter((contact) => {
    // console.log(contact);
    // console.log(contact.name);
    // console.log(contact.number);
    return contact.name.toLowerCase().includes(normalizedFilter);
  });
};
