import React from "react";
import ReactDOM from "react-dom";
import AppRouter, { history } from "./routers/AppRouter";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";
import { firebase } from "./firebase/firebase";
import { startSetExpenses } from "./actions/expenses";
import { login, logout } from "./actions/auth";
import LoadingPage from './components/LoadingPage';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById("app"));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById("app"));

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if (history.location.pathname === "/") {
        history.push("/dashboard");
      }
    });
  } else {
    if (store.getState().auth.uid) {
      store.dispatch(logout());
    }
    renderApp();
    history.push("/");
  }
});
