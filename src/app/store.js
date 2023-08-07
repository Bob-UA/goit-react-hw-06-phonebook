import { configureStore } from "@reduxjs/toolkit";
import { phonebookReducer } from "store/phonebookSlice";

export const store = configureStore({
    reducer: {
      phonebook:phonebookReducer,
  },
});