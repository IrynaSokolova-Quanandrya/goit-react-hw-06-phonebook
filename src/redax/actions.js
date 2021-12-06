import { createAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const addContact = createAction("contact/Add", (number, name) => ({
  payload: {
    id: nanoid(),
    name,
    number,
  },
}));

const deleteContact = createAction("contact/Delete");

const changeFilter = createAction("contact/changeFilter");

const phonebookActions = {
  addContact,
  deleteContact,
  changeFilter,
};
export default phonebookActions;
