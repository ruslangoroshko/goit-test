import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import rootStore from "./stores/rootStore";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={rootStore}>
    <App />
  </Provider>
);
