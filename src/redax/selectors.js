export const getContacts = (state) => state.contacts;
export const getFilter = (state) => state.filter;

export const visibleContacts = (state) => {
  // console.log('Весь стейт внутри visibleContacts:', state);
  const contacts = getContacts(state);
  const filter = getFilter(state);
  //  console.log("Фильтр внутри visibleContacts:", filter);
  //   console.log("Контакты внутри visibleContacts:", contacts );
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(({ name }) => {
    // console.log({name});
    return name.toLowerCase().includes(normalizedFilter);
  });
};
