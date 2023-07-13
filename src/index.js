import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";

import { Provider } from "react-redux";
import { store } from "./store";
// import data from "./mock/data.json";

// console.log(data)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
