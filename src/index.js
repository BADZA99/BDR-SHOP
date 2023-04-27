import React from "react";
import ReactDOM from "react-dom/client";
// import provider
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import App from "./views/components/App";
import store from "./lib/store";
import { addToCart } from "./lib/actions";
import {AppContainer} from './views/containers/index'

// log initial state
console.log(store.getState());

// subscribe to store updates
const unsubscribe = store.subscribe(() => console.log(store.getState()));

// dispatch actions
// store.dispatch(addToCart({ name: "puma" }, 3));
// store.dispatch(addToCart({ name: "voiturea" }, 3));
unsubscribe();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </Router>
  </React.StrictMode>
);

