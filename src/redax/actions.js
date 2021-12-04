import types from "./types";
import { nanoid } from "nanoid";

const addContact = ({ name, number }) => ({
  type: types.ADD,
  payload: {
    id: nanoid(),
    name,
    number,
  },
});

const deleteContact = (nameId) => ({
  type: types.DELETE,
  payload: nameId,
});

const getFilter = (value) => ({
  type: types.GET_FILTER,
  payload: value,
});

export default { addContact, deleteContact, getFilter };
