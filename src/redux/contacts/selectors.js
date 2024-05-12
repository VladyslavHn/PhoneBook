import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from '../filters/selectors';

export const selectContacts = state => state.contacts.contacts;
export const selectIsLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;
export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    if (filter.trim() === '') {
      return contacts;
    } else {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
  }
);

