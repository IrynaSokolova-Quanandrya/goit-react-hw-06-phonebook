import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import phonebookReducer from "./reduser";

const rootReduser = combineReducers({
  phonebook: phonebookReducer,
});
const store = createStore(rootReduser, composeWithDevTools());
export default store;
