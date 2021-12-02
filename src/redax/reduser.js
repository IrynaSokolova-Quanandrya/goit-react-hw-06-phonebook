import { combineReducers } from "redux";
import types from "./types";

const INITIAL_CONTACTS_LIST = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const contacts = (state = INITIAL_CONTACTS_LIST, { type, payload }) => {
  switch (type) {
    case types.ADD:
      return [...state, payload];
    default:
      return state;
  }
};
const filter = (state = "", actions) => {
  return state;
};
export default combineReducers({
  contacts,
  filter,
});
