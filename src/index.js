import './polyfills'
import React from "react";
import ReactDOM from "react-dom";
// import './index.css';
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { RoomProvider } from "./context";
import { Router } from "react-router-dom";
import history from "./utils/historyUtils";
import { HitMetrika } from "./utils/HitMetrika";

ReactDOM.render(
  <RoomProvider>
    <Router history={history}>
      <App />
    </Router>
  </RoomProvider>,
  document.getElementById("root")
);

history.listen((location, action) => {
  if (action === "PUSH") {
  	  HitMetrika(53709112, location.pathname)
  }
});
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
