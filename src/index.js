import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import DataLayer from "./context/data-layer";
import { InitialState, reducer } from "./context/reducer";
ReactDOM.render(
  <DataLayer initialState={InitialState} reducer={reducer}>
    <App />
  </DataLayer>,

  document.getElementById("root")
);
