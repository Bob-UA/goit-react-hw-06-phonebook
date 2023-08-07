import { createSlice, nanoid } from "@reduxjs/toolkit";
import { phonebookInitialState } from "./initialState/phonebookInitialState";

export const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState: phonebookInitialState,
  reducers: {
    addContact: (state, action) => {
      const { name, number } = action.payload;
      const contact = {
        id: nanoid(),
        name,
        number,
      };
        state.contacts.find(option => option.name === contact.name) ? alert(`${contact.name} is already in contacts`) : state.contacts = [...state.contacts, contact];
      },
      
      deleteContact: (state, action) => {
        //   state.contacts = state.contacts.filter(contact => contact.id !== action.contactId);
        // setContacts(prevState => prevState.filter(
        //     contact => contact.id !== contactId
        //   ),
        // );
      },
      changeFilter: (state, action) => {
          state.filter = action.payload;
    },
  },
});

export const { addContact, changeFilter, deleteContact } = phonebookSlice.actions;
export const phonebookReducer = phonebookSlice.reducer;