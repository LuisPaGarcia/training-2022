import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import allReducers from "./redux/reducers";

//The created store
const store = createStore(allReducers);

// Using the provider as a wrapper from the root
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
