import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import {myAction} from './redax/actions';
import store from "./redax/store";
console.log(store);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
