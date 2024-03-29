import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilterText = state => state.filter.text;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilterText],
  (contacts, filterText) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterText)
    );
  }
);
