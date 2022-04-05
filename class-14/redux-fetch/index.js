import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/reducers";
import { Provider } from "react-redux";
import "./style.css";

// Using the provider as a wrapper from the root
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
