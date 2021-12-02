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
export default { addContact };
