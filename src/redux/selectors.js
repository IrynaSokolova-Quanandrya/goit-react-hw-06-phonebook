import { createSelector } from "@reduxjs/toolkit";

export const getContacts = (state) => state.contacts.contacts;
export const getFilter = (state) => state.contacts.filter;

export const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    // const contacts = getContacts(state);
    // const filter = getFilter(state);
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) => {
      return contact.name.toLowerCase().includes(normalizedFilter);
    });
  }
);
