import React from "react";
import ReactDOM from "react-dom/client";
// import provider
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./views/App";
import store from "./lib/store";
import { addToCart } from "./lib/actions";

// log initial state
console.log(store.getState());

// subscribe to store updates
 const unsubscribe = store.subscribe(() => console.log(store.getState()));

// dispatch actions
store.dispatch(addToCart({name:"puma"},3));
store.dispatch(addToCart({name:"voiturea"},3));
unsubscribe()

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
);
